import EmberObject from '@ember/object';
import TriggerFocusMixin from 'ember-cli-text-support-mixins/mixins/trigger-focus';
import { module, test } from 'qunit';

module('Unit | Mixin | trigger focus', function() {
  // Replace this with your real tests.
  test('check out the acceptance tests', function (assert) {
    let TriggerFocusObject = EmberObject.extend(TriggerFocusMixin);
    let subject = TriggerFocusObject.create();
    assert.ok(subject);
  });
});
