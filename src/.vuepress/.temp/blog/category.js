export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"Python\":{\"path\":\"/category/python/\",\"indexes\":[0]},\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[1,2,3,4,5]},\"指南\":{\"path\":\"/category/%E6%8C%87%E5%8D%97/\",\"indexes\":[6]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"Python\":{\"path\":\"/tag/python/\",\"indexes\":[0]},\"高德\":{\"path\":\"/tag/%E9%AB%98%E5%BE%B7/\",\"indexes\":[0]},\"POI\":{\"path\":\"/tag/poi/\",\"indexes\":[0]},\"禁用\":{\"path\":\"/tag/%E7%A6%81%E7%94%A8/\",\"indexes\":[2]},\"加密\":{\"path\":\"/tag/%E5%8A%A0%E5%AF%86/\",\"indexes\":[3]},\"布局\":{\"path\":\"/tag/%E5%B8%83%E5%B1%80/\",\"indexes\":[6]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[4]},\"页面配置\":{\"path\":\"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/\",\"indexes\":[1]},\"使用指南\":{\"path\":\"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[1]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

