import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('text-area', 'Integration | Component | text area', {
  integration: true
});

test('when rendered without block the .text-area class is present', function (assert) {
  this.render(hbs`{{text-area}}`);
  assert.ok(this.$('textarea').hasClass('text-area'));
});

// test('when rendered with block the .text-area class is present', function (assert) {
//   this.render(hbs`
//     {{#text-area}}Block Style{{/text-area}}
//   `);
//   assert.ok(this.$('textarea').hasClass('text-area'));
//   assert.equal(this.$('textarea').val(), 'Block Style');
// });
