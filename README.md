# egg-tenpay

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-tenpay.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-tenpay
[travis-image]: https://img.shields.io/travis/eggjs/egg-tenpay.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-tenpay
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-tenpay.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-tenpay?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-tenpay.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-tenpay
[snyk-image]: https://snyk.io/test/npm/egg-tenpay/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-tenpay
[download-image]: https://img.shields.io/npm/dm/egg-tenpay.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-tenpay

<!--
egg plugin for [tenpay](https://github.com/befinal/node-tenpay)
-->

## Install

```bash
$ npm i egg-tenpay --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.tenpay = {
  enable: true,
  package: 'egg-tenpay'
};
```

## Configuration

```js
//参考 [tenpay](https://github.com/befinal/node-tenpay)配置
// {app_root}/config/config.default.js
exports.tenpay = {
  client: {
    appid: 'appid',
    mchid: 'mchid',
    partnerKey: 'partnerKey',
    notify_url: 'notify_url',
    sandbox: true // sandbox是插件加的
  }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```
// api调用
const result = await app.tenpay.getPayParams({
  out_trade_no: '商户内部订单号',
  body: '商品简单描述',
  total_fee: '订单金额(分)',
  openid: '付款用户的openid'
});

// 中间件
// router.js
router.post('/notify',app.middleware.tenpay('pay', app),controller.home.notify);

```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
