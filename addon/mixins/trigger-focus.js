import { on } from '@ember/object/evented';
import Mixin from '@ember/object/mixin';

/**
 * This ensures that focus is placed into an input or textarea should the autofocus property exist.
 * Why?  Because when Ember RETURNS to a template for a second or more time, the element with autofocus does not
 * seem to trigger.
 * This fixes that.
 *
 * This mixin assumes that it is being assigned to a component that will respond to the `focus` event.
 */
export default Mixin.create({
  /**
   * @default autofocus is set to false.
   */
  autofocus: false,

  /**
   * When the element is inserted, trigger the focus event.
   */
  _triggerFocus: on('didInsertElement', function () {
    if (this.get('autofocus')) {
      this.get('element').focus();
    }
  })
});
