// global-teardown.js
const { teardown: teardownPuppeteer } = require('jest-environment-puppeteer');

module.exports = async function() {
  await teardownPuppeteer();
};
