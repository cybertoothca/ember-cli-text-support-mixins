import EmberObject from '@ember/object';
import CtrlEnterSubmitsFormMixin from 'ember-cli-text-support-mixins/mixins/ctrl-enter-submits-form';
import { module, test } from 'qunit';

module('Unit | Mixin | ctrl enter submits form', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let CtrlEnterSubmitsFormObject = EmberObject.extend(CtrlEnterSubmitsFormMixin);
    let subject = CtrlEnterSubmitsFormObject.create();
    assert.ok(subject);
  });
});
