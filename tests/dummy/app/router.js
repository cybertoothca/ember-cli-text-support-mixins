import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('acceptance', function () {
    this.route('focus-selects-text');
    this.route('autofocus-with-select-text');
    this.route('autofocus-select-text-disabled');
    this.route('escape-clears-text');
  });
  this.route('demo', function () {
    this.route('text-area-select-text');
    this.route('text-area-autofocus');
    this.route('input-text-select-text');
    this.route('input-text-escape-clears');
    this.route('text-area-escape-clears');
    this.route('input-text-enter-submits');
    this.route('input-text-ctrl-enter-submits');
    this.route('text-area-ctrl-enter-submits');
  });
});
