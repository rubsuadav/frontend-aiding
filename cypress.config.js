const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    CYPRESS_backendUrl: "https://firee.pythonanywhere.com/",
  },
  projectId: "5jcwhm",
  reporter: "mochawesome",
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
      this.baseUrl = "https://firee.pythonanywhere.com/";
    },
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
