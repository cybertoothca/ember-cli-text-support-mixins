import { setupApplicationTest } from "ember-qunit";
import { module, skip, test } from "qunit";

import { currentURL, focus, visit } from "@ember/test-helpers";

module("Acceptance | focus selects text", function (hooks) {
  setupApplicationTest(hooks);

  skip("when focusSelectsText? is enabled", async function (assert) {
    await visit("/acceptance/focus-selects-text");

    assert.equal(currentURL(), "/acceptance/focus-selects-text");
    assert.dom("input.select-enabled").hasValue("Select This Text");
    assert.equal(window.getSelection().toString(), "");
    await await focus("input.select-enabled");
    assert.equal(window.getSelection().toString(), "Select This Text");
  });

  test("when focusSelectsText? is false or turned off", async function (assert) {
    await visit("/acceptance/focus-selects-text");

    assert.equal(currentURL(), "/acceptance/focus-selects-text");
    assert
      .dom("input.select-disabled")
      .hasValue("Text Will Not Select On Focus");
    assert.equal(window.getSelection().toString(), "");
    await await focus("input.select-disabled");
    assert.equal(window.getSelection().toString(), "");
  });
});
