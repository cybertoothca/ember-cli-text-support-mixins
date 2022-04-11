import EmberObject from '@ember/object';
import EnterSubmitsFormMixin from 'ember-cli-text-support-mixins/mixins/enter-submits-form';
import { module, test } from 'qunit';

module('Unit | Mixin | enter submits form', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let EnterSubmitsFormObject = EmberObject.extend(EnterSubmitsFormMixin);
    let subject = EnterSubmitsFormObject.create();
    assert.ok(subject);
  });
});
