import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-text', 'Integration | Component | input text', {
  integration: true
});

test('it renders', function (assert) {
  this.render(hbs`{{input-text}}`);
  assert.equal(this.$().text().trim(), '');
});
