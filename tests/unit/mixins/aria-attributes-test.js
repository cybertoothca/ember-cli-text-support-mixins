import EmberObject from '@ember/object';
import AriaAttributesMixin from 'ember-cli-text-support-mixins/mixins/aria-attributes';
import { module, test } from 'qunit';

module('Unit | Mixin | aria attributes');

// Replace this with your real tests.
test('it works', function (assert) {
  let AriaAttributesObject = EmberObject.extend(AriaAttributesMixin);
  let subject = AriaAttributesObject.create();
  assert.ok(subject);
});
