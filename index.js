/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-text-field-mixins',
  included: function (app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/keyevent/src/keyevent.js');
  }
};
