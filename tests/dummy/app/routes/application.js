import { get } from '@ember/object';
import { hash } from 'rsvp';
import config from '../config/environment';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      appName: get(config, 'APP.name')
    })
  }
});
