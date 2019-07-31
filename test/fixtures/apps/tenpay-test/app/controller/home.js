'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.tenpay.name;
  }
  async init() {
    this.ctx.body = { result: !!this.app.tenpay };
  }
  async notify() {
    const { weixin } = this.ctx.request;
    this.ctx.body = weixin;
  }
}

module.exports = HomeController;
