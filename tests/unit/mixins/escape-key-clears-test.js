import Ember from 'ember';
import EscapeKeyClearsMixin from 'ember-cli-text-field-mixins/mixins/escape-key-clears';
import { module, test } from 'qunit';

module('Unit | Mixin | escape key clears');

// Replace this with your real tests.
test('it works', function (assert) {
  let EscapeKeyClearsObject = Ember.Object.extend(EscapeKeyClearsMixin);
  let subject = EscapeKeyClearsObject.create();
  assert.ok(subject);
});
