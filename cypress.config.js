const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,

  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/**/*.cy.js', // ou .spec.js, dependendo dos arquivos de teste
  },
});
