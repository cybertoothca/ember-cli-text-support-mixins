import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('acceptance', function () {
    this.route('focus-selects-text');
    this.route('autofocus-with-select-text');
    this.route('autofocus-select-text-disabled');
    this.route('escape-clears-text');
  });
});

export default Router;
