// custom-environment.js
const PuppeteerEnvironment = require('jest-environment-puppeteer');

class CustomEnvironment extends PuppeteerEnvironment {
  async setup() {
    await super.setup();

    // todo implement browser providers?
    // todo find a way to run the tests in the evaluate context...

    //  this.global.window = await this.global.page.evaluate(() => window);
    //  this.global.document = await this.global.page.evaluate(() => window.document);
    //  let canvas = await this.global.page.evaluate(() => window.document.createElement('canvas'));

    this.global.window = {
      URL: {
        revokeObjectURL: () => {},
        createObjectURL: () => {}
      },
      addEventListener: () => {}
    };
    this.global.URL = this.global.window.URL;

    this.global.document = {};
    this.global.navigator = {};

    let canvas = {
      getContext: () => {},
      toDataURL: () => 'data:image/png',
      style: {},
      addEventListener: () => {}
    };

    this.global.document.createElement = (tagName) => {
      switch (tagName) {
        case 'canvas':
          return canvas;
        case 'a':
          return { style: {} };
        default: {
          return {
            style: {},
            addEventListener: () => {}
          };
        }
      }
    };

    this.global.XMLHttpRequest = function() {};
    this.global.XMLHttpRequest.prototype = {
      open: function() {}
    };
  }

  async teardown() {
    // Your teardown
    await super.teardown();
  }
}

module.exports = CustomEnvironment;
