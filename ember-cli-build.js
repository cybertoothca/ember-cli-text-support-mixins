/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    nodeAssets: {
      keyevent: {
        vendor: {
          srcDir: 'src',
          destDir: 'ember-cli-text-support-mixins',
          include: ['keyevent.js']
        }
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('vendor/ember-cli-text-support-mixins/keyevent.js');

  return app.toTree();
};
