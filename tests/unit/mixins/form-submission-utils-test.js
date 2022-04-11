import EmberObject from '@ember/object';
import FormSubmissionUtilsMixin from 'ember-cli-text-support-mixins/mixins/form-submission-utils';
import { module, test } from 'qunit';

module('Unit | Mixin | form submission utils', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let FormSubmissionUtilsObject = EmberObject.extend(FormSubmissionUtilsMixin);
    let subject = FormSubmissionUtilsObject.create();
    assert.ok(subject);
  });
});
