import { computed, get } from '@ember/object';
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
    if (this.get('focusSelectsText?') && this.get('_elementIsTextOrTextarea')) {
      // using a runloop to make sure textarea text can be selected in webkit/safari
      // @see https://stackoverflow.com/a/6201757/545137

      Ember.run.later(this, () => {
        this.get('element').select();
      }, 1);
    }
  },

  /**
   * By default, focus on `this` input/textarea will select the text within.  Set this to `false` if you do not
   * want this behaviour.
   */
  'focusSelectsText?': true,

  _elementIsTextOrTextarea: computed('element.type', function () {
    return ['text', 'textarea'].includes(get(this, 'element.type'));
  })
});
