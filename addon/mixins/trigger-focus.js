import Mixin from '@ember/object/mixin';

/**
 * This ensures that focus is placed into a text-based-input or `textarea` should when the `autofocus`
 * property is set.
 *
 * Why?  Because when Ember TRANSITIONS between the same template, the element with `autofocus` does not
 * seem to trigger.
 *
 * This fixes that using the `didInsertElement()` hook.
 *
 * This mixin assumes that it is being assigned to a component that will respond to the invocation of
 * the `focus()` event.
 */
export default Mixin.create({

  /**
   * @default autofocus is set to false.
   */
  autofocus: false,

  didInsertElement() {
    this._super(...arguments);

    if (this.get('autofocus')) {
      this.element.focus();
    }
  }
});
