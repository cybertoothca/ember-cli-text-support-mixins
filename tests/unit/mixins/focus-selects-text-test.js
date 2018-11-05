import EmberObject from '@ember/object';
import FocusSelectsTextMixin from 'ember-cli-text-support-mixins/mixins/focus-selects-text';
import { module, test } from 'qunit';

module('Unit | Mixin | focus selects text');

// Replace this with your real tests.
test('check out the acceptance tests', function (assert) {
  let FocusSelectsTextObject = EmberObject.extend(FocusSelectsTextMixin);
  let subject = FocusSelectsTextObject.create();
  assert.ok(subject);
});
