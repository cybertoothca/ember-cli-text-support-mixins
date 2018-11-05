/* global KeyEvent */
import { isPresent } from '@ember/utils';
import Mixin from '@ember/object/mixin';
import ClosestFormMixin from './closest-form';

export default Mixin.create(ClosestFormMixin, {
  'enterWillSubmitForm?': true,

  keyDown(event) {
    this._super(...arguments);
    if ((!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) &&
      (event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN)) {
      event.preventDefault();
      const form = this.get('_form');
      if (isPresent(form) && this.get('enterWillSubmitForm?')) {
        // TODO: trigger before and after?
        form.onsubmit();
      }
      return false;
    }
    return true;
  }
});
