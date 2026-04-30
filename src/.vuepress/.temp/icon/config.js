import { hasGlobalComponent } from "D:/Desktop/demo/my-docssinglel/node_modules/@vuepress/helper/dist/client/index.js";
import { useScriptTag } from "D:/Desktop/demo/my-docssinglel/node_modules/@vueuse/core/dist/index.js";
import { h } from "vue";
import { VPIcon } from "D:/Desktop/demo/my-docssinglel/node_modules/@vuepress/plugin-icon/dist/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
