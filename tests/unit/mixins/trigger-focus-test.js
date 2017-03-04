import Ember from 'ember';
import TriggerFocusMixin from 'ember-cli-text-field-mixins/mixins/trigger-focus';
import { module, test } from 'qunit';

module('Unit | Mixin | trigger focus');

// Replace this with your real tests.
test('check out the acceptance tests', function (assert) {
  let TriggerFocusObject = Ember.Object.extend(TriggerFocusMixin);
  let subject = TriggerFocusObject.create();
  assert.ok(subject);
});
