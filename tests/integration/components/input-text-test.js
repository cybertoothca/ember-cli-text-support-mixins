import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-text', 'Integration | Component | input text', {
  integration: true
});

test('when rendered the .input-text is present', function (assert) {
  this.render(hbs`{{input-text}}`);
  assert.ok(this.$('input[type=text]').hasClass('input-text'));
});
