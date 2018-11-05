import TextField from '@ember/component/text-field';
import CtrlEnterSubmitsForm from '../mixins/ctrl-enter-submits-form';
import EnterSubmitsForm from '../mixins/enter-submits-form';
import EscapeKeyClears from '../mixins/escape-key-clears';
import FocusSelectsText from '../mixins/focus-selects-text';
import TriggerFocus from '../mixins/trigger-focus';

export default TextField.extend(CtrlEnterSubmitsForm, EnterSubmitsForm, EscapeKeyClears, FocusSelectsText,
  TriggerFocus, {
    classNames: ['input-text']
  });
