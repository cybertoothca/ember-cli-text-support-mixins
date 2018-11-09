/* global KeyEvent */
import { once } from '@ember/runloop';
import { deprecatingAlias } from '@ember/object/computed';
import ClosestForm from './closest-form';
import FormSubmissionUtils from './form-submission-utils';
import Mixin from '@ember/object/mixin';

/**
 * When the CTRL+ENTER is pressed the nearest form up the DOM is triggered for submit.
 *
 * By default this behaviour is not activated.  Set `ctrlEnterSubmitsForm?` boolean to enable/disable.
 */
export default Mixin.create(ClosestForm, FormSubmissionUtils, {
  /**
   * Pass in a closure function to fire after the form submit is triggered.
   * The function will receive three parameters: the first is the DOM event, the second is
   * `this` component, and the third is the jQuery wrapped `$form`.
   */
  afterCtrlEnterSubmitAction: deprecatingAlias('afterSubmit', {
    id: 'mixin.ctrl-enter-submits-form.deprecate-after-ctrl-enter-submit-action',
    until: '2.1.0'
  }),

  /**
   * Pass in a closure function to fire before the form submit is triggered.
   * The function will receive three parameters: the first is the DOM event, the second is
   * `this` component, and the third is the jQuery wrapped `$form`.
   */
  beforeCtrlEnterSubmitAction: deprecatingAlias('afterSubmit', {
    id: 'mixin.ctrl-enter-submits-form.deprecate-after-ctrl-enter-submit-action',
    until: '2.1.0'
  }),

  /**
   * When set to `true`, CTRL+ENTER will attempt to submit the nearest form.  Set this to `false` if you do not
   * want this behaviour.  Default value is `false`.
   */
  'ctrlEnterSubmitsForm?': false,

  /**
   * Immediately prevent this ENTER/RETURN key from bubbling.
   * @param event the keyboard event.
   */
  insertNewline(event) {
    this._super(...arguments);

    if (this.get('ctrlEnterSubmitsForm?') && event.ctrlKey) {
      once(this, this._triggerFormSubmission, this.get('afterAction'), this.get('beforeAction'), event, this.get('_form'))
    }
  },

  /**
   * If the ENTER or RETURN key is pressed cancel the action via `event.preventDefault()`.
   * Stopping bubbling at this level will prevent the DEFAULT submission of a form as per the HTML spec.
   * This matters, because we want to use `enterSubmitsForm?` to potentially stop the enter key from submitting.
   * @param event the keyboard event.
   */
  keyPress(event) {
    this._super(...arguments);

    if (event.ctrlKey && (event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN)) {
      event.preventDefault();
    }
  }
});
