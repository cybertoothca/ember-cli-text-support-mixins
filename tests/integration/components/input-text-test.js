import { setupRenderingTest } from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
/* global KeyEvent */
import { module, skip, test } from "qunit";

import { render, triggerKeyEvent } from "@ember/test-helpers";
import { isPresent } from "@ember/utils";

module("Integration | Component | input text", function (hooks) {
  setupRenderingTest(hooks);

  test("when rendered the .input-text class is present", async function (assert) {
    await render(hbs`{{input-text}}`);
    assert.dom("input[type=text]").hasClass("input-text");
  });

  skip("when form is not submitted by pressing enter", async function (assert) {
    let formSubmitted = false;

    this.set("formAction", () => {
      formSubmitted = true;
    });

    await render(
      hbs`<form onsubmit={{action this.formAction}}>
            {{input-text enterSubmitsForm?=true }}
          </form>`
    );

    assert.notOk(formSubmitted);

    await triggerKeyEvent("input", "keydown", KeyEvent.DOM_VK_ENTER);

    assert.ok(formSubmitted);
  });

  test("when form cannot be found it does not ctrl+enter submit or invoke any before/after hooks", async function (assert) {
    let wasCalled = false;
    let formSubmitted = false;
    this.set("beforeSubmitAction", function (event, component, $form) {
      wasCalled = true;
      assert.ok(isPresent(event));
      assert.ok(isPresent(component));
      assert.ok(isPresent($form));
    });

    await render(
      hbs`{{input-text ctrlEnterSubmitsForm?=true beforeSubmit=this.beforeSubmitAction}}`
    );

    assert.notOk(wasCalled);
    assert.notOk(formSubmitted);

    await triggerKeyEvent("input", "keydown", KeyEvent.DOM_VK_ENTER, {
      ctrlKey: true,
    });

    assert.notOk(wasCalled);
    assert.notOk(formSubmitted);
  });

  skip("when hooking into the before ctrl-enter-submits-form hook", async function (assert) {
    let wasCalled = false;
    let formSubmitted = false;

    this.set("beforeSubmitAction", function (event, component, $form) {
      wasCalled = true;
      assert.ok(isPresent(event));
      assert.ok(isPresent(component));
      assert.ok(isPresent($form));
    });

    this.set("formAction", () => {
      formSubmitted = true;
    });

    await render(
      hbs`<form onsubmit={{action this.formAction}}>
            {{input-text ctrlEnterSubmitsForm?=true beforeSubmit=this.beforeSubmitAction }}
          </form>`
    );

    assert.notOk(wasCalled);
    assert.notOk(formSubmitted);

    await triggerKeyEvent("input", "keydown", KeyEvent.DOM_VK_ENTER, {
      ctrlKey: true,
    });

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

    this.set("formAction", () => {
      formSubmitted = true;
    });

    await render(
      hbs`<form onsubmit={{action this.formAction}}>
            {{input-text ctrlEnterSubmitsForm?=true afterCtrlEnterSubmitAction=this.afterCtrlEnterSubmitAction}}
          </form>`
    );

    assert.notOk(wasCalled);
    assert.notOk(formSubmitted);

    await triggerKeyEvent("input", "keydown", KeyEvent.DOM_VK_ENTER, {
      ctrlKey: true,
    });

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

    await triggerKeyEvent("input", "keyup", KeyEvent.DOM_VK_ESCAPE);

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

    await triggerKeyEvent("input", "keyup", KeyEvent.DOM_VK_ESCAPE);

    assert.ok(wasCalled);
  });
});
