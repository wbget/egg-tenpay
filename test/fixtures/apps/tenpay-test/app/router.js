'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/init', controller.home.init);
  router.post(
    '/notify',
    app.middleware.tenpay('pay', app),
    controller.home.notify
  );
};
