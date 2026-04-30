export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"vuepress-theme-hope 的博客演示\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"vuepress-theme-hope 的博客演示\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
