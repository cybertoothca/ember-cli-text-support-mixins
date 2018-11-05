import { isPresent } from '@ember/utils';
import Mixin from '@ember/object/mixin';

/**
 * When the escape key is pressed, the `value` proper will be cleared.
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
    if (this.get('escapeKeyClears?')) {
      // fire the before-clear action
      if (isPresent(this.get('beforeClearAction'))) {
        this.get('beforeClearAction')(event, this);
      }

      this.set('value', '');

      // fire the after-clear action
      if (isPresent(this.get('afterClearAction'))) {
        this.get('afterClearAction')(event, this);
      }
    }
  }
});
