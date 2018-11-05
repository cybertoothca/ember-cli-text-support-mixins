/* global KeyEvent */
import { isPresent } from '@ember/utils';
import Mixin from '@ember/object/mixin';
import ClosestFormMixin from './closest-form';

export default Mixin.create(ClosestFormMixin, {
  'enterWillSubmitForm?': true,

  keyDown(event) {
    this._super(...arguments);
    if (this._notAltCtrlMetaShift(event) && this._isEnterOrReturnKey(event)) {
      event.preventDefault();
      const form = this.get('_form');
      if (isPresent(form) && this.get('enterWillSubmitForm?')) {
        // TODO: trigger before and after?
        form.onsubmit();
      }
      return false;
    }
    return true;
  },

  /**
   * @param event the event to test
   * @return {boolean} true if the enter OR the return key was pressed, false otherwise
   * @private
   */
  _isEnterOrReturnKey(event) {
    return event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN;
  },

  /**
   * @param event the event to test
   * @return {boolean} true if none of the modifier keys are pressed (alt, ctrl, meta, and shift), false otherwise
   * @private
   */
  _notAltCtrlMetaShift(event) {
    return !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey;
  }
});
