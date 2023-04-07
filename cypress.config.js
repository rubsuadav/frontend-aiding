const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "amfs9g",
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
      this.baseUrl = "http://localhost:3000";
    },
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
