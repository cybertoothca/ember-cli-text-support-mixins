import { setupRenderingTest } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import { module, test } from "qunit";

import { render } from "@ember/test-helpers";

module("Integration | Component | text area", function (hooks) {
  setupRenderingTest(hooks);

  test("when rendered without block the .text-area class is present", async function (assert) {
    await render(hbs`{{text-area}}`);
    assert.dom("textarea").hasClass("text-area");
  });

  // test('when rendered with block the .text-area class is present', function (assert) {
  //   await render(hbs`
  //     {{#text-area}}Block Style{{/text-area}}
  //   `);
  //   assert.ok(this.$('textarea').hasClass('text-area'));
  //   assert.equal(this.$('textarea').val(), 'Block Style');
  // });
});
