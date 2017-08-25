import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
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
