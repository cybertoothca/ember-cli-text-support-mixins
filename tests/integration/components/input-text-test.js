import { setupRenderingTest } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
/* global jQuery */
/* global KeyEvent */
import { module, skip, test } from "qunit";

import EmberObject from "@ember/object";
import { render, triggerEvent } from "@ember/test-helpers";
import { isPresent } from "@ember/utils";

module("Integration | Component | input text", function (hooks) {
  setupRenderingTest(hooks);

  test("when rendered the .input-text class is present", async function (assert) {
    await render(hbs`{{input-text}}`);
    assert.dom("input[type=text]").hasClass("input-text");
  });

  skip("when form is not submitted by pressing enter", async function (assert) {
    let formSubmitted = false;
    this.set(
      "_form",
      EmberObject.create({
        onsubmit() {
          formSubmitted = true;
        },
      })
    );
    this.render(hbs`{{input-text enterWillSubmitForm?=true _form=_form}}`);

    assert.notOk(formSubmitted);

    const event = jQuery.Event("keydown");
    event.which = event.keyCode = KeyEvent.DOM_VK_ENTER;
    event.ctrlKey = false;
    await triggerEvent("input", "focus");
    this.$("input").trigger(event);

    assert.ok(formSubmitted);
  });

  test("when form cannot be found it does not ctrl+enter submit or invoke any before/after hooks", async function (assert) {
    let wasCalled = false;
    let formSubmitted = false;
    this.set("beforeCtrlEnterSubmitAction", function (event, component, $form) {
      wasCalled = true;
      assert.ok(isPresent(event));
      assert.ok(isPresent(component));
      assert.ok(isPresent($form));
    });
    await render(
      hbs`{{input-text ctrlEnterSubmitsForm?=true beforeCtrlEnterSubmitAction=beforeCtrlEnterSubmitAction}}`
    );

    assert.notOk(wasCalled);
    assert.notOk(formSubmitted);

    const event = jQuery.Event("keydown");
    event.which = event.keyCode = KeyEvent.DOM_VK_ENTER;
    event.ctrlKey = true;
    await triggerEvent("input", "focus");
    this.$("input").trigger(event);

    assert.notOk(wasCalled);
    assert.notOk(formSubmitted);
  });

  skip("when hooking into the before ctrl-enter-submits-form hook", async function (assert) {
    let wasCalled = false;
    let formSubmitted = false;
    this.set("beforeCtrlEnterSubmitAction", function (event, component, $form) {
      wasCalled = true;
      assert.ok(isPresent(event));
      assert.ok(isPresent(component));
      assert.ok(isPresent($form));
    });
    this.set(
      "_form",
      EmberObject.create({
        onsubmit() {
          formSubmitted = true;
        },
      })
    );
    this.render(
      hbs`{{input-text ctrlEnterSubmitsForm?=true beforeCtrlEnterSubmitAction=beforeCtrlEnterSubmitAction _form=_form}}`
    );

    assert.notOk(wasCalled);
    assert.notOk(formSubmitted);

    const event = jQuery.Event("keydown");
    event.which = event.keyCode = KeyEvent.DOM_VK_ENTER;
    event.ctrlKey = true;
    await triggerEvent("input", "focus");
    this.$("input").trigger(event);

    assert.ok(wasCalled);
    assert.ok(formSubmitted);
  });

  skip("when hooking into the after ctrl-enter-submits-form hook", async function (assert) {
    let wasCalled = false;
    let formSubmitted = false;
    this.set("afterCtrlEnterSubmitAction", function (event, component, $form) {
      wasCalled = true;
      assert.ok(isPresent(event));
      assert.ok(isPresent(component));
      assert.ok(isPresent($form));
    });
    this.set(
      "_form",
      EmberObject.create({
        onsubmit() {
          formSubmitted = true;
        },
      })
    );
    this.render(
      hbs`{{input-text ctrlEnterSubmitsForm?=true afterCtrlEnterSubmitAction=afterCtrlEnterSubmitAction _form=_form}}`
    );

    assert.notOk(wasCalled);
    assert.notOk(formSubmitted);

    const event = jQuery.Event("keydown");
    event.which = event.keyCode = KeyEvent.DOM_VK_ENTER;
    event.ctrlKey = true;
    await triggerEvent("input", "focus");
    this.$("input").trigger(event);

    assert.ok(wasCalled);
    assert.ok(formSubmitted);
  });

  test("when hooking into the before escape-key-clears hook", async function (assert) {
    let wasCalled = false;
    this.set("beforeClearAction", function (event, component) {
      wasCalled = true;
      assert.ok(isPresent(event));
      assert.ok(isPresent(component));
    });
    await render(
      hbs`{{input-text escapeKeyClears?=true beforeClearAction=beforeClearAction}}`
    );

    assert.notOk(wasCalled);

    const event = jQuery.Event("keyup");
    event.which = event.keyCode = KeyEvent.DOM_VK_ESCAPE;
    this.$("input").trigger(event);

    assert.ok(wasCalled);
  });

  test("when hooking into the after escape-key-clears hook", async function (assert) {
    let wasCalled = false;
    this.set("afterClearAction", function (event, component) {
      wasCalled = true;
      assert.ok(isPresent(event));
      assert.ok(isPresent(component));
    });
    await render(
      hbs`{{input-text escapeKeyClears?=true afterClearAction=afterClearAction}}`
    );

    assert.notOk(wasCalled);

    const event = jQuery.Event("keyup");
    event.which = event.keyCode = KeyEvent.DOM_VK_ESCAPE;
    this.$("input").trigger(event);

    assert.ok(wasCalled);
  });
});
