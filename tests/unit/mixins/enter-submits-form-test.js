import Ember from 'ember';
import EnterSubmitsFormMixin from 'ember-cli-text-support-mixins/mixins/enter-submits-form';
import { module, test } from 'qunit';

module('Unit | Mixin | enter submits form');

// Replace this with your real tests.
test('it works', function (assert) {
  let EnterSubmitsFormObject = Ember.Object.extend(EnterSubmitsFormMixin);
  let subject = EnterSubmitsFormObject.create();
  assert.ok(subject);
});
