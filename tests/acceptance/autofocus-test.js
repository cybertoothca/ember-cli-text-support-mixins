import { setupApplicationTest } from "ember-qunit";
// eslint-disable-next-line no-unused-vars
import { module, skip, test } from "qunit";

import { currentURL, visit } from "@ember/test-helpers";

module("Acceptance | autofocus", function (hooks) {
  setupApplicationTest(hooks);

  skip("when autofocus is enabled and focusSelectsText? is also enabled", async function (assert) {
    await visit("/acceptance/autofocus-with-select-text");

    assert.equal(currentURL(), "/acceptance/autofocus-with-select-text");
    assert.equal(document.activeElement.autofocus, true);
    assert.equal(window.getSelection().toString(), "Autofocus This Text");
  });

  skip("when revisiting a template that already had been autofocused", async function (assert) {
    await visit("/acceptance/autofocus-with-select-text");

    assert.equal(currentURL(), "/acceptance/autofocus-with-select-text");
    assert.equal(document.activeElement.autofocus, true);
    assert.equal(window.getSelection().toString(), "Autofocus This Text");
  });

  skip("when autofocus is enabled and focusSelectsText? is disabled", async function (assert) {
    await visit("/acceptance/autofocus-select-text-disabled");

    assert.equal(currentURL(), "/acceptance/autofocus-select-text-disabled");
    assert.equal(document.activeElement.autofocus, true);
    assert.equal(window.getSelection().toString(), "");
  });
});
