const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    //setupNodeEvents(on, config) {
      // implement node event listeners here
      
    //},
    baseURL: 'https://mock-operator.dev.pokerskins.io/',
  },
})
