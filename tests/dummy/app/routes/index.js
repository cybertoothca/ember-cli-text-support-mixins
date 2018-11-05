import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    submit() {
      window.alert('The form was submitted at ' + new Date().toISOString());
    }
  }
});
