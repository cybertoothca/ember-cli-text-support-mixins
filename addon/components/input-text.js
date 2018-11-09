import AriaAttributes from '../mixins/aria-attributes';
import CtrlEnterSubmitsForm from '../mixins/ctrl-enter-submits-form';
import EnterSubmitsForm from '../mixins/enter-submits-form';
import EscapeKeyClears from '../mixins/escape-key-clears';
import FocusSelectsText from '../mixins/focus-selects-text';
import TextField from '@ember/component/text-field';
import TriggerFocus from '../mixins/trigger-focus';

export default TextField.extend(AriaAttributes, CtrlEnterSubmitsForm, EnterSubmitsForm, EscapeKeyClears,
  FocusSelectsText, TriggerFocus, {
    classNames: ['input-text']
  });
