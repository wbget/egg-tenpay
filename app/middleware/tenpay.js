'use strict';

module.exports = (options, app) => {
  return async (ctx, next) => {
    return app.tenpay.middleware(options)(ctx, next);
  };
};
