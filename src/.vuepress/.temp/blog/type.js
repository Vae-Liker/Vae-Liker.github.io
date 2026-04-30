export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,7,6,1,2,5,3,4]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[0]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[7,6,0]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

