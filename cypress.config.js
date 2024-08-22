const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      testEmail: 'valtersp03@gmail.com',
      testPassword: 'passwordSecure123'
    },
  },
});
