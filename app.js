'use strict';
const tenpay = require('tenpay');

const createWeapy = config => {
  return new tenpay(config, !!config.sandbox);
};

class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  async didLoad() {
    this.app.addSingleton('tenpay', createWeapy);
  }
}
module.exports = AppBootHook;
