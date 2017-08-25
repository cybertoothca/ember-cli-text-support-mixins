/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-text-support-mixins',
  options: {
    nodeAssets: {
      keyevent: {
        vendor: {
          srcDir: 'src',
          destDir: 'keyevent',
          include: ['keyevent.js']
        }
      }
    }
  },
  included: function (app) {
    this._super.included(app);
    app.import('vendor/keyevent/keyevent.js');
  }
};
