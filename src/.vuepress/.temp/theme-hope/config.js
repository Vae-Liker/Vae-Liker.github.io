import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/Desktop/demo/Vae-Liker.github.io/node_modules/vuepress-theme-hope/dist/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "D:/Desktop/demo/Vae-Liker.github.io/node_modules/@vuepress/plugin-catalog/dist/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "D:/Desktop/demo/Vae-Liker.github.io/node_modules/vuepress-theme-hope/dist/bundle/exports/blog.js";
import "D:/Desktop/demo/Vae-Liker.github.io/node_modules/vuepress-theme-hope/dist/client/styles/blog/layout.scss";
import { GlobalEncrypt, LocalEncrypt } from "D:/Desktop/demo/Vae-Liker.github.io/node_modules/vuepress-theme-hope/dist/bundle/exports/encrypt.js";

import "D:/Desktop/demo/Vae-Liker.github.io/node_modules/@vuepress/helper/dist/client/styles/colors.css";
import "D:/Desktop/demo/Vae-Liker.github.io/node_modules/@vuepress/helper/dist/client/styles/normalize.css";
import "D:/Desktop/demo/Vae-Liker.github.io/node_modules/@vuepress/helper/dist/client/styles/sr-only.css";
import "D:/Desktop/demo/Vae-Liker.github.io/node_modules/vuepress-theme-hope/dist/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
