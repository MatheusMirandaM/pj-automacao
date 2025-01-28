const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
    e2e: {
        viewportHeight: 1080,
        viewportWidth: 1920,
        baseUrl: 'https://phptravels.com/demo/',
        baseUrlAdmin: 'https://phptravels.com/admin',
        snapshotOnly: true,
        defaultCommandTimeout: 10000,
        specPattern: "**/*.feature",
        setupNodeEvents(on, config) {
            on("file:preprocessor", cucumber())
        },
    },
});
