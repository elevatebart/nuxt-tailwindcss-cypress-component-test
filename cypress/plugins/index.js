/// <reference types="cypress" />
const { startDevServer } = require("@cypress/webpack-dev-server");
const { getWebpackConfig } = require("nuxt");

/**
 * @type Cypress.PluginConfig
 */
module.exports = (on, config) => {
  on("dev-server:start", async options => {
    const webpackConfig = await getWebpackConfig("modern", "dev");

    return startDevServer({
      options,
      webpackConfig
    });
  });

  return config;
};
