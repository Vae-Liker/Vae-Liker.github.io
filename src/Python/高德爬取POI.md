---
icon: pen-to-square
date: 2022-01-01
category:
  - Python
tag:
  - Python
  - 高德
  - POI
---

# 高德爬取POI
这是我自己通过对网络资料的收集和自己所学的浅薄Python知识进行整理写成的高德POI获取代码方法。
>**<span style="color:#2e8b57; font-size: 22px;">关于高德POI</span>**
> 
> 高德POI是从高德官方API接口中获取的，需要一定的代码知识基础。

## ⼀、获取高德API的key
首先在[⾼德开放平台]((https://lbs.amap.com/))注册并认证,进入个人中⼼->应用管理->我的应用->创建应用->添加->
命名，服务平台选择Web服务，勾选协议许可，确定->就能看到你自己的key了。
注册并认证之后你的信息如下
![高德爬取POI](/gade/gd1.png)

创建应用
![高德爬取POI](/gade/gd2.png)

添加key
![高德爬取POI](/gade/gd3.png)

方框里就是你的key
![高德爬取POI](/gade/gd4.png)
## ⼆、获取POI分类代码以及城市代码
在[开发 > Web服务 API > 相关](https://lbs.amap.com/api/webservice/download)下载 中下载 POI分类编码 与 城市编码表
![高德爬取POI](/gade/gd5.png)

## 三、代码实现
引入Python库

``` Python
from urllib.parse import quote
from urllib import request
import json
import xlwt
import pandas as pd
import math
import os
import csv
```
your_key 替换为上⾯申请的密钥
``` Python
amap_web_key = 'your_key'
poi_search_url = "http://restapi.amap.com/v3/place/text"
poi_boundary_url = "https://ditu.amap.com/detail/get/detail"
#from transCoordinateSystem import gcj02_to_wgs84
```
 cityname为需要爬取的POI所属的城市名，nanning_areas为城市下⾯的所有区，classes为多个
分类名集合. (中⽂名或者代码都可以，代码详⻅⾼德地图的POI分类编码表)
``` Python
# 根据城市名称和分类关键字获取poi数据
def getpois(cityname, keywords):
    i = 1
    poilist = []
    while True:  # 使用while循环不断分页获取数据
        result = getpoi_page(cityname, keywords, i)
        print(result)
        result = json.loads(result)  # 将字符串转换为json
        if result['count'] == '0':
            break
        hand(poilist, result)
        i = i + 1
    return poilist


# 数据写入excel
def write_to_excel(poilist, nanning_areas,cityname, classfield):
    
    # 一个Workbook对象，这就相当于创建了一个Excel文件
    book = xlwt.Workbook(encoding='utf-8', style_compression=0)
    sheet = book.add_sheet(classfield, cell_overwrite_ok=True)

    # 第一行(列标题)
    sheet.write(0, 0, 'x')
    sheet.write(0, 1, 'y')
    sheet.write(0, 2, 'count')
    sheet.write(0, 3, 'name')


    for i in range(len(poilist)):
        location = poilist[i]['location']
        name = poilist[i]['name']
        lng = str(location).split(",")[0]
        lat = str(location).split(",")[1]

        '''
        result = gcj02_to_wgs84(float(lng), float(lat))

        lng = result[0]
        lat = result[1]
        '''

        # 每一行写入
        sheet.write(i + 1, 0, lng)
        sheet.write(i + 1, 1, lat)
        sheet.write(i + 1, 2, 1)
        sheet.write(i + 1, 3, name)


    name=(cityname + "_" + (nanning_areas[2:-2]) + "_" + classfield )
    # 最后，将以上操作保存到指定的Excel文件中
    book.save(r'' + name + '.xls')


# 将返回的poi数据装入集合返回
def hand(poilist, result):
    # result = json.loads(result)  # 将字符串转换为json
    pois = result['pois']
    for i in range(len(pois)):
        poilist.append(pois[i])


# 单页获取pois
def getpoi_page(cityname, keywords, page):
    req_url = poi_search_url + "?key=" + amap_web_key + '&extensions=all&keywords=' + quote(
        keywords) + '&city=' + quote(cityname) + '&citylimit=true' + '&offset=25' + '&page=' + str(
        page) + '&output=json'
    data = ''
    with request.urlopen(req_url) as f:
        data = f.read()
        data = data.decode('utf-8')
    return data

def gu(calsses):
    for clas in classes:
        classes_all_pois = []
        for area in nanning_areas:
            pois_area = getpois(area, clas)
            print('当前城区：' + str(area) + ', 分类：' + str(clas) + ", 总的有" + str(len(pois_area)) + "条数据")
            classes_all_pois.extend(pois_area)
        print("所有城区的数据汇总，总数为：" + str(len(classes_all_pois)))
    
        write_to_excel(classes_all_pois, str(nanning_areas), cityname, clas)
    
        print('================分类：'  + str(clas) + "写入成功")

x_pi = 3.14159265358979324 * 3000.0 / 180.0
pi = 3.1415926535897932384626  # π
a = 6378245.0  # 长半轴
ee = 0.00669342162296594323  # 扁率
```
火星坐标系转换
```python
def gcj02towgs84(lng, lat):
    """
    GCJ02(火星坐标系)转GPS84
    :param lng:火星坐标系的经度
    :param lat:火星坐标系纬度
    :return:
    """
    if out_of_china(lng, lat):
        return lng, lat
    dlat = transformlat(lng - 105.0, lat - 35.0)
    dlng = transformlng(lng - 105.0, lat - 35.0)
    radlat = lat / 180.0 * pi
    magic = math.sin(radlat)
    magic = 1 - ee * magic * magic
    sqrtmagic = math.sqrt(magic)
    dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * pi)
    dlng = (dlng * 180.0) / (a / sqrtmagic * math.cos(radlat) * pi)
    mglat = lat + dlat
    mglng = lng + dlng
    return [lng * 2 - mglng, lat * 2 - mglat]

def transformlat(lng, lat):
    ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + \
        0.1 * lng * lat + 0.2 * math.sqrt(math.fabs(lng))
    ret += (20.0 * math.sin(6.0 * lng * pi) + 20.0 *
            math.sin(2.0 * lng * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(lat * pi) + 40.0 *
            math.sin(lat / 3.0 * pi)) * 2.0 / 3.0
    ret += (160.0 * math.sin(lat / 12.0 * pi) + 320 *
            math.sin(lat * pi / 30.0)) * 2.0 / 3.0
    return ret

def transformlng(lng, lat):
    ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + \
        0.1 * lng * lat + 0.1 * math.sqrt(math.fabs(lng))
    ret += (20.0 * math.sin(6.0 * lng * pi) + 20.0 *
            math.sin(2.0 * lng * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(lng * pi) + 40.0 *
            math.sin(lng / 3.0 * pi)) * 2.0 / 3.0
    ret += (150.0 * math.sin(lng / 12.0 * pi) + 300.0 *
            math.sin(lng / 30.0 * pi)) * 2.0 / 3.0
    return ret

def out_of_china(lng, lat):
    """
    判断是否在国内，不在国内不做偏移
    :param lng:
    :param lat:
    :return:
    """
    if lng < 72.004 or lng > 137.8347:
        return True
    if lat < 0.8293 or lat > 55.8271:
        return True
    return False
def file_name(file_dir):  
    li=[]  
    for root, dirs, files in os.walk(file_dir): 
      for file in files: 
        if os.path.splitext(file)[1] == '.xls': 
          li.append(os.path.join(file)) 
    
    for i in range(0,len(li)):     
        df = pd.read_excel(li[i])
        if not os.path.exists(path):
            os.mkdir(path)
        with open(path+"{}_84.csv".format(li[i][:-4]),"w",newline="") as file:
            writter = csv.writer(file)
            writter.writerow(["x_84", "y_84", "名称"])
            for index,row in df.iterrows():
                i = gcj02towgs84(row["x"],row["y"])
                writter.writerow([i[0],i[1],row["name"]])
            file.close()
    print("坐标转换完毕")
def del_xls(file_dir):
    
    li=[]  
    for root, dirs, files in os.walk(file_dir): 
      for file in files: 
        if os.path.splitext(file)[1] == '.xls': 
          li.append(os.path.join(file)) 
    for i in range(0,len(li)):
        if os.path.exists(li[i]):
            os.remove(li[i])
        else:
            print("no such file:%s"%li[i])
if __name__ == '__main__':
    path = "D:/Desktop/POI"
    # cityname为需要爬取的POI所属的城市名，nanning_areas为城市下面的所有区，classes为多个分类名集合. (中文名或者代码都可以，代码详见高德地图的POI分类编码表)
    cityname = '巫溪县'
    nanning_areas = ['500238'] 
    classes = ['乡镇级政府及事业单位']
    
    gu(classes)
    file_name(path)
    del_xls(path)
```
若爬取多个城市的多个种类的POI，还可以改写成循环运行