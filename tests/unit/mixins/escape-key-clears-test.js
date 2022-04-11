import EmberObject from '@ember/object';
import EscapeKeyClearsMixin from 'ember-cli-text-support-mixins/mixins/escape-key-clears';
import { module, test } from 'qunit';

module('Unit | Mixin | escape key clears', function() {
  // Replace this with your real tests.
  test('check out the acceptance tests', function (assert) {
    let EscapeKeyClearsObject = EmberObject.extend(EscapeKeyClearsMixin);
    let subject = EscapeKeyClearsObject.create();
    assert.ok(subject);
  });
});
