import { setupApplicationTest } from "ember-qunit";
/* global KeyEvent */
// eslint-disable-next-line no-unused-vars
import { module, skip, test } from "qunit";

import { currentURL, find, keyEvent, visit } from "@ember/test-helpers";

module("Acceptance | escape clears", function (hooks) {
  setupApplicationTest(hooks);

  skip("when escape clears text by default", async function (assert) {
    await visit("/acceptance/escape-clears-text");

    assert.equal(currentURL(), "/acceptance/escape-clears-text");
    assert.equal(
      find("input.escape-clears-by-default").value,
      "Escape Clears This Text"
    );
    await keyEvent(
      "input.escape-clears-by-default",
      "keyup",
      KeyEvent.DOM_VK_ESCAPE
    );
    assert.equal(find("input.escape-clears-by-default").value, "");
  });

  skip("when escape clears text because escapeKeyClears? was set to true", async function (assert) {
    await visit("/acceptance/escape-clears-text");

    assert.equal(currentURL(), "/acceptance/escape-clears-text");
    assert.equal(
      find("input.escape-clears-enabled").value,
      "Escape Clears This Text"
    );
    await keyEvent(
      "input.escape-clears-enabled",
      "keyup",
      KeyEvent.DOM_VK_ESCAPE
    );
    assert.equal(find("input.escape-clears-enabled").value, "");
  });

  skip("when escape WILL NOT clear text because escapeKeyClears? was set to false", async function (assert) {
    await visit("/acceptance/escape-clears-text");

    assert.equal(currentURL(), "/acceptance/escape-clears-text");
    assert.equal(
      find("input.escape-clears-disabled").value,
      "Escape Will Not Clear This Text"
    );
    await keyEvent(
      "input.escape-clears-disabled",
      "keyup",
      KeyEvent.DOM_VK_ESCAPE
    );
    assert.equal(
      find("input.escape-clears-disabled").value,
      "Escape Will Not Clear This Text"
    );
  });
});
