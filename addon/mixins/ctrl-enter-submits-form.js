/* global KeyEvent */
import Ember from 'ember';

/**
 * When the CTRL+ENTER is pressed the nearest form up the dom is triggered for submit.  By default this behaviour
 * is not activated.  See `ctrlEnterSubmitsForm?` for more information.
 */
export default Ember.Mixin.create({
  /**
   * Pass in a closure function to fire after the form submit is triggered.
   * The function will receive three parameters: the first is the DOM event, the second is
   * `this` component, and the third is the jQuery wrapped `$form`.
   */
  afterSubmitAction: undefined,
  /**
   * Pass in a closure function to fire before the form submit is triggered.
   * The function will receive three parameters: the first is the DOM event, the second is
   * `this` component, and the third is the jQuery wrapped `$form`.
   */
  beforeSubmitAction: undefined,
  /**
   * When set to `true`, CTRL+ENTER will attempt to submit the nearest form.  Set this to `false` if you do not
   * want this behaviour.  Default value is `false`.
   */
  'ctrlEnterSubmitsForm?': false,
  /**
   * The keyDown event is determining whether CTRL+ENTER was pressed.
   * If you override make sure to `this._super(...arguments)` to preserve this behaviour.
   * @param event
   */
  keyDown(event) {
    this._super(...arguments);
    if (this.get('ctrlEnterSubmitsForm?') &&
      (event.ctrlKey && (event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN))) {
      event.preventDefault();
      const $form = this.$().closest('form');  // this.form does not work because component is wrapped
      if (Ember.isPresent($form)) {
        // fire the before-submit action
        if (Ember.isPresent(this.get('beforeSubmitAction'))) {
          this.get('beforeSubmitAction')(event, this, $form);
        }
        $form.trigger('submit');
        // fire the after-submit action
        if (Ember.isPresent(this.get('afterSubmitAction'))) {
          this.get('afterSubmitAction')(event, this, $form);
        }
      }
    }
  }
});
