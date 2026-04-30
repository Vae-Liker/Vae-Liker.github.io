import { hasGlobalComponent } from "D:/Desktop/demo/Vae-Liker.github.io/node_modules/@vuepress/helper/dist/client/index.js";
import Badge from "D:/Desktop/demo/Vae-Liker.github.io/node_modules/vuepress-plugin-components/dist/client/components/Badge.js";
import VPCard from "D:/Desktop/demo/Vae-Liker.github.io/node_modules/vuepress-plugin-components/dist/client/components/VPCard.js";

import "D:/Desktop/demo/Vae-Liker.github.io/node_modules/@vuepress/helper/dist/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
