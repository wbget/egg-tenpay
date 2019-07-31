'use strict';

const mock = require('egg-mock');

describe('test/tenpay.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/tenpay-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app
      .httpRequest()
      .get('/')
      .expect('hi, tenpay')
      .expect(200);
  });
  it('should GET /init', () => {
    return app
      .httpRequest()
      .get('/init')
      .expect({ result: true })
      .expect(200);
  });
  it('should POST /notify', () => {
    return app
      .httpRequest()
      .post('/notify')
      .set('accept', 'xml')
      .type('text')
      .send(
        '<xml><appid><![CDATA[wx2421b1c4370ec43b]]></appid><attach><![CDATA[支付测试]]></attach><bank_type><![CDATA[CFT]]></bank_type><fee_type><![CDATA[CNY]]></fee_type><is_subscribe><![CDATA[Y]]></is_subscribe><mch_id><![CDATA[10000100]]></mch_id><nonce_str><![CDATA[5d2b6c2a8db53831f7eda20af46e531c]]></nonce_str><openid><![CDATA[oUpF8uMEb4qRXf22hE3X68TekukE]]></openid><out_trade_no><![CDATA[1409811653]]></out_trade_no><result_code><![CDATA[SUCCESS]]></result_code><return_code><![CDATA[SUCCESS]]></return_code><sign><![CDATA[B552ED6B279343CB493C5DD0D78AB241]]></sign><time_end><![CDATA[20140903131540]]></time_end><total_fee>1</total_fee><coupon_fee><![CDATA[10]]></coupon_fee><coupon_count><![CDATA[1]]></coupon_count><coupon_type><![CDATA[CASH]]></coupon_type><coupon_id><![CDATA[10000]]></coupon_id><coupon_fee><![CDATA[100]]></coupon_fee><trade_type><![CDATA[JSAPI]]></trade_type><transaction_id><![CDATA[1004400740201409030005092168]]></transaction_id></xml>'
      )
      .expect(200)
      .expect(
        '<?xml version="1.0"?>\n<xml>\n  <return_code>FAIL</return_code>\n  <return_msg>appid不匹配</return_msg>\n</xml>'
      );
  });
});
