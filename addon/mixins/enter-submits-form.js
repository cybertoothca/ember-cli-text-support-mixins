/* global KeyEvent */
import Ember from 'ember';

export default Ember.Mixin.create({
  'enterWillSubmitForm?': true,
  keyDown(event) {
    this._super(...arguments);
    if (event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN) {
      if (this.get('enterWillSubmitForm?')) {
        this.get('_form').trigger('submit');
        return true;
      } else {
        return false;
      }
    }
    return true;
  },
  /**
   * Grab the nearest form.  Normally you can just ask an input for it's `this.form`, however that doesn't
   * seem to work with Ember wrapped TextSupport components?  Using a jQuery find of the closest form instead.
   */
  _form: Ember.computed(function () {
    return this.$().closest('form');
  })
});
