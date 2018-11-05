import TextArea from '@ember/component/text-area';
import CtrlEnterSubmitsForm from '../mixins/ctrl-enter-submits-form';
import EscapeKeyClears from '../mixins/escape-key-clears';
import FocusSelectsText from '../mixins/focus-selects-text';
import TriggerFocus from '../mixins/trigger-focus';

export default TextArea.extend(CtrlEnterSubmitsForm, EscapeKeyClears, FocusSelectsText, TriggerFocus, {
  classNames: ['text-area']
});
