/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-text-support-mixins',
  included: function (app) {
    this._super.included(app);
    app.import('vendor/keyevent.js');
  }
};
