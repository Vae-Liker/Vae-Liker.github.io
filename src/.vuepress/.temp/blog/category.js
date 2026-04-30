export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[0,1,2,3,4]},\"指南\":{\"path\":\"/category/%E6%8C%87%E5%8D%97/\",\"indexes\":[5]},\"Python\":{\"path\":\"/category/python/\",\"indexes\":[6]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"禁用\":{\"path\":\"/tag/%E7%A6%81%E7%94%A8/\",\"indexes\":[1]},\"加密\":{\"path\":\"/tag/%E5%8A%A0%E5%AF%86/\",\"indexes\":[2]},\"布局\":{\"path\":\"/tag/%E5%B8%83%E5%B1%80/\",\"indexes\":[5]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[3]},\"页面配置\":{\"path\":\"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/\",\"indexes\":[0]},\"使用指南\":{\"path\":\"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[0]},\"Python\":{\"path\":\"/tag/python/\",\"indexes\":[6]},\"高德\":{\"path\":\"/tag/%E9%AB%98%E5%BE%B7/\",\"indexes\":[6]},\"POI\":{\"path\":\"/tag/poi/\",\"indexes\":[6]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

