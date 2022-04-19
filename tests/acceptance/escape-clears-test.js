import { setupApplicationTest } from "ember-qunit";
import KeyEvent from "keyevent";
// eslint-disable-next-line no-unused-vars
import { module, skip, test } from "qunit";

import { currentURL, keyEvent, visit } from "@ember/test-helpers";

module("Acceptance | escape clears", function (hooks) {
  setupApplicationTest(hooks);

  skip("when escape clears text by default", async function (assert) {
    await visit("/acceptance/escape-clears-text");

    assert.equal(currentURL(), "/acceptance/escape-clears-text");
    assert
      .dom("input.escape-clears-by-default")
      .hasValue("Escape Clears This Text");
    await keyEvent(
      "input.escape-clears-by-default",
      "keyup",
      KeyEvent.DOM_VK_ESCAPE
    );
    assert.dom("input.escape-clears-by-default").hasValue("");
  });

  skip("when escape clears text because escapeKeyClears? was set to true", async function (assert) {
    await visit("/acceptance/escape-clears-text");

    assert.equal(currentURL(), "/acceptance/escape-clears-text");
    assert
      .dom("input.escape-clears-enabled")
      .hasValue("Escape Clears This Text");
    await keyEvent(
      "input.escape-clears-enabled",
      "keyup",
      KeyEvent.DOM_VK_ESCAPE
    );
    assert.dom("input.escape-clears-enabled").hasValue("");
  });

  skip("when escape WILL NOT clear text because escapeKeyClears? was set to false", async function (assert) {
    await visit("/acceptance/escape-clears-text");

    assert.equal(currentURL(), "/acceptance/escape-clears-text");
    assert
      .dom("input.escape-clears-disabled")
      .hasValue("Escape Will Not Clear This Text");
    await keyEvent(
      "input.escape-clears-disabled",
      "keyup",
      KeyEvent.DOM_VK_ESCAPE
    );
    assert
      .dom("input.escape-clears-disabled")
      .hasValue("Escape Will Not Clear This Text");
  });
});
