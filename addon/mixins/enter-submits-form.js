/* global KeyEvent */
import { computed } from '@ember/object';

import { isPresent } from '@ember/utils';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  'enterWillSubmitForm?': true,
  keyDown(event) {
    this._super(...arguments);
    if ((!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) &&
      (event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN)) {
      event.preventDefault();
      const $form = this.get('_form');
      if (isPresent($form) && this.get('enterWillSubmitForm?')) {
        // TODO: trigger before and after?
        $form.trigger('submit');
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
    return this.$().closest('form');
  })
});
