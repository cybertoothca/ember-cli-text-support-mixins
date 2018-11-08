/* global KeyEvent */
import { once } from '@ember/runloop';
import { deprecatingAlias } from '@ember/object/computed';
import FormSubmissionUtils from './form-submission-utils';
import Mixin from '@ember/object/mixin';

export default Mixin.create(FormSubmissionUtils, {

  /**
   * The version 1.x property for pressing enter.  Deprecated in favour of `enterSubmitsForm?`.
   * @deprecated
   */
  'enterWillSubmitForm?': deprecatingAlias('enterSubmitsForm?', {
    id: 'mixin.enter-submits-form.deprecate-enter-will-submit-form?',
    until: '2.1.0'
  }),

  /**
   * Defaults to `true`.  By default, a text-based input should submit when just the enter key is pressed.
   */
  'enterSubmitsForm?': true,

  /**
   * Immediately prevent this ENTER/RETURN key from bubbling.
   * @param event the keyboard event.
   */
  insertNewline(event) {
    this._super(...arguments);

    if (this.get('enterSubmitsForm?') && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
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
    if (event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN) {
      event.preventDefault();
    }
  }
});
