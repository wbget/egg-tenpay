'use strict';

/**
 * egg-tenpay default config
 * @member Config#tenpay
 * @property {String} SOME_KEY - some description
 */
exports.tenpay = {};

exports.bodyParser = {
  enableTypes: [ 'json', 'form', 'text' ],
  extendTypes: {
    text: [ 'text/xml', 'application/xml' ],
  },
};
