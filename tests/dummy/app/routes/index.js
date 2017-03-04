import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit() {
      window.alert('The form was submitted.');
    }
  }
});
