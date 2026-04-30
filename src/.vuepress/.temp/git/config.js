import { GitContributors } from "D:/Desktop/demo/Vae-Liker.github.io/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
