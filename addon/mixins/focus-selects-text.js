import Ember from 'ember';

/**
 * When focus is placed in a `input[:text]` or `textarea` the text within is selected.
 */
export default Ember.Mixin.create({
  /**
   * If you override make sure to `this._super(...arguments)` to preserve this behaviour.
   */
  focusIn(/*event*/) {
    this._super(...arguments);
    if (this.get('focusSelectsText?') && this.$().is(':text, textarea')) {
      this.$().trigger('select');
    }
  },
  /**
   * By default, focus on `this` input/textarea will select the text within.  Set this to `false` if you do not
   * want this behaviour.
   */
  'focusSelectsText?': true
});
