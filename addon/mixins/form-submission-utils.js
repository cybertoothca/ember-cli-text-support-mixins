import { isPresent } from '@ember/utils';
import Mixin from '@ember/object/mixin';

/**
 * A mixin used by the `ctrl-enter-submits-form` and `enter-submits-form` mixins
 */
export default Mixin.create({
  /**
   * Pass in a closure function to fire after the form submit is triggered.
   * The function will receive three parameters: the first is the DOM event, the second is
   * `this` component, and the third is the jQuery wrapped `$form`.
   */
  afterSubmit() {
    // override accordingly
  },

  /**
   * Pass in a closure function to fire before the form submit is triggered.
   * The function will receive three parameters: the first is the DOM event, the second is
   * `this` component, and the third is the jQuery wrapped `$form`.
   */
  beforeSubmit() {
    // override accordingly
  },

  /**
   *
   * @param form
   * @private
   */
  _submitForm(form) {
    const submitButton = document.createElement('button');
    submitButton.style.display = 'none';
    submitButton.type = 'submit';
    try {
      form.appendChild(submitButton);
      submitButton.click();
    } finally {
      submitButton.remove();
    }
  },

  _triggerFormSubmission(afterSubmitFunction, beforeSubmitFunction, event, form) {
    // fire the before-submit action
    if (isPresent(beforeSubmitFunction)) {
      beforeSubmitFunction(event, this, form);
    }
    // submit the form
    this._submitForm(form);
    // fire the after-submit action
    if (isPresent(afterSubmitFunction)) {
      afterSubmitFunction(event, this, form);
    }
  }
});
