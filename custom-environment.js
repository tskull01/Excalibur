// custom-environment.js
const PuppeteerEnvironment = require('jest-environment-puppeteer');

class CustomEnvironment extends PuppeteerEnvironment {
  async setup() {
    await super.setup();
    this.global.window = {};
    this.global.document = {};
    // Your setup
  }

  async teardown() {
    // Your teardown
    await super.teardown();
  }
}

module.exports = CustomEnvironment;
