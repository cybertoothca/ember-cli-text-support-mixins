import Ember from 'ember';
import CtrlEnterSubmitsForm from '../mixins/ctrl-enter-submits-form';
import EscapeKeyClears from '../mixins/escape-key-clears';
import FocusSelectsText from '../mixins/focus-selects-text';
import TriggerFocus from '../mixins/trigger-focus';

export default Ember.TextField.extend(CtrlEnterSubmitsForm, EscapeKeyClears, FocusSelectsText, TriggerFocus, {});
