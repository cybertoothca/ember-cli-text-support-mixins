import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

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
   * Grab the nearest form.  Normally you can just ask an input for it's `this.form`, however that doesn't
   * seem to work with Ember wrapped TextSupport components?  Using `closest('form')` to find of
   * the closest form instead.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
   * @private
   */
  _form: computed('element', function () {
    return this.get('element').closest('form');
  }),

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
