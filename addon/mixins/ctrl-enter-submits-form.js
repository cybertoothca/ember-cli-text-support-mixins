/* global KeyEvent */
import { computed } from '@ember/object';

import { isPresent } from '@ember/utils';
import Mixin from '@ember/object/mixin';

/**
 * When the CTRL+ENTER is pressed the nearest form up the dom is triggered for submit.  By default this behaviour
 * is not activated.  See `ctrlEnterSubmitsForm?` for more information.
 */
export default Mixin.create({

  /**
   * Pass in a closure function to fire after the form submit is triggered.
   * The function will receive three parameters: the first is the DOM event, the second is
   * `this` component, and the third is the jQuery wrapped `$form`.
   */
  afterCtrlEnterSubmitAction() {
    // override accordingly
  },

  /**
   * Pass in a closure function to fire before the form submit is triggered.
   * The function will receive three parameters: the first is the DOM event, the second is
   * `this` component, and the third is the jQuery wrapped `$form`.
   */
  beforeCtrlEnterSubmitAction() {
    // override accordingly
  },

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
    if (event.ctrlKey && (event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN)) {
      event.preventDefault();
      if (this.get('ctrlEnterSubmitsForm?')) {
        const form = this.get('_form');
        if (isPresent(form)) {
          // fire the before-submit action
          if (isPresent(this.get('beforeCtrlEnterSubmitAction'))) {
            this.get('beforeCtrlEnterSubmitAction')(event, this, form);
          }
          form.onsubmit();
          // fire the after-submit action
          if (isPresent(this.get('afterCtrlEnterSubmitAction'))) {
            this.get('afterCtrlEnterSubmitAction')(event, this, form);
          }
        }
      }
      return false;
    }
    return true;
  },

  /**
   * Grab the nearest form.  Normally you can just ask an input for it's `this.form`, however that doesn't
   * seem to work with Ember wrapped TextSupport components?  Using a jQuery find of the closest form instead.
   */
  _form: computed(function () {
    return this.element.closest('form');
  })
});
