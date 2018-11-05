import EmberObject from '@ember/object';
import ClosestFormMixin from 'ember-cli-text-support-mixins/mixins/closest-form';
import { module, test } from 'qunit';

module('Unit | Mixin | closest form');

// Replace this with your real tests.
test('it works', function (assert) {
  let ClosestFormObject = EmberObject.extend(ClosestFormMixin);
  let subject = ClosestFormObject.create();
  assert.ok(subject);
});
