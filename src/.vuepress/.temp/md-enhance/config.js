import CodeDemo from "D:/Desktop/demo/my-docssinglel/node_modules/vuepress-plugin-md-enhance/dist/client/components/CodeDemo.js";
import MdDemo from "D:/Desktop/demo/my-docssinglel/node_modules/vuepress-plugin-md-enhance/dist/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
