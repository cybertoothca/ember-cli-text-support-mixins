'use strict';

module.exports = {
  name: 'ember-cli-text-support-mixins',
  options: {
    nodeAssets: {
      keyevent: {
        vendor: {
          srcDir: 'src',
          destDir: 'ember-cli-text-support-mixins',
          include: ['keyevent.js']
        }
      }
    }
  },
  included: function (app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/ember-cli-text-support-mixins/keyevent.js');
  }
};
