const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    API_URL: process.env.REACT_APP_BACKEND_URL,
  },
  projectId: "5jcwhm",
  reporter: "mochawesome",
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
