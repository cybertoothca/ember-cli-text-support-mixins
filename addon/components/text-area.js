import AriaAttributes from '../mixins/aria-attributes';
import CtrlEnterSubmitsForm from '../mixins/ctrl-enter-submits-form';
import EscapeKeyClears from '../mixins/escape-key-clears';
import FocusSelectsText from '../mixins/focus-selects-text';
import TextArea from '@ember/component/text-area';
import TriggerFocus from '../mixins/trigger-focus';

export default TextArea.extend(AriaAttributes, CtrlEnterSubmitsForm, EscapeKeyClears, FocusSelectsText, TriggerFocus, {
  classNames: ['text-area']
});
