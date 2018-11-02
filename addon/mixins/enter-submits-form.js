/* global KeyEvent */
import Ember from 'ember';

export default Ember.Mixin.create({

  'enterWillSubmitForm?': true,

  keyDown(event) {
    this._super(...arguments);
    if ((!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) &&
      (event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN)) {
      event.preventDefault();
      const form = this.get('_form');
      if (this.get('enterWillSubmitForm?') && Ember.isPresent(form) && Ember.isPresent(form.onsubmit)) {
        // TODO: trigger before and after?
        form.onsubmit();
      }
      return false;
    }
    return true;
  },

  /**
   * Grab the nearest form.  Normally you can just ask an input for it's `this.form`, however that doesn't
   * seem to work with Ember wrapped TextSupport components?  Using `closest('form')` to find of
   * the closest form instead.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
   */
  _form: Ember.computed('element', function () {
    return this.get('element').closest('form');
  })
});
