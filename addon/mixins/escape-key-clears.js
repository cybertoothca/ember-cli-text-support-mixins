import { isPresent } from '@ember/utils';
import { trySet } from '@ember/object';
import Mixin from '@ember/object/mixin';

/**
 * When the escape key is pressed, the `value` of the text `input`/`textarea` will be cleared.
 *
 * Note, this does not register the clearing with the undo-stack of browsers.
 */
export default Mixin.create({

  /**
   * Pass in a closure function to fire after the value is cleared.
   * The function will receive two parameters: the first is the DOM event, and the second is
   * `this` component.
   */
  afterClearAction() {
    // override accordingly
  },

  /**
   * Pass in a closure function to fire before the value is cleared.
   * The function will receive two parameters: the first is the DOM event, and the second is
   * `this` component.
   */
  beforeClearAction() {
    // override accordingly
  },

  /**
   * By default, pressing the ESC key will clear this' `value` property.  Set this to `false` if you do not
   * want this behaviour.
   */

  'escapeKeyClears?': true,

  /**
   * If you override make sure to `this._super(...arguments)` to preserve this behaviour.
   */
  cancel(event) {
    this._super(...arguments);
    if (this['escapeKeyClears?']) {
      // fire the before-clear action
      if (isPresent(this.beforeClearAction)) {
        this.beforeClearAction(event, this);
      }

      this.element.value = '';  // for Ember-2.4 & Ember-2.8
      trySet(this, 'value', '');

      // fire the after-clear action
      if (isPresent(this.afterClearAction)) {
        this.afterClearAction(event, this);
      }
    }
  }
});
