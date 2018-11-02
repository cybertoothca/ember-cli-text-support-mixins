/* global jQuery */
/* global KeyEvent */
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('input-text', 'Integration | Component | input text', {
  integration: true
});

test('when rendered the .input-text class is present', function (assert) {
  this.render(hbs`{{input-text}}`);
  assert.ok(this.$('input[type=text]').hasClass('input-text'));
});

test('when form is not submitted by pressing enter', function (assert) {
  let formSubmitted = false;
  this.set('_form', Ember.Object.create({
    onsubmit() {
      formSubmitted = true;
    }
  }));
  this.render(hbs`{{input-text enterWillSubmitForm?=true _form=_form}}`);

  assert.notOk(formSubmitted);

  const event = jQuery.Event("keydown");
  event.which = event.keyCode = KeyEvent.DOM_VK_ENTER;
  event.ctrlKey = false;
  this.$("input").trigger('focus');
  this.$("input").trigger(event);

  assert.ok(formSubmitted);
});

test('when form cannot be found it does not ctrl+enter submit or invoke any before/after hooks', function (assert) {
  let wasCalled = false;
  let formSubmitted = false;
  this.set('beforeCtrlEnterSubmitAction', function (event, component, $form) {
    wasCalled = true;
    assert.ok(Ember.isPresent(event));
    assert.ok(Ember.isPresent(component));
    assert.ok(Ember.isPresent($form));
  });
  this.render(hbs`{{input-text ctrlEnterSubmitsForm?=true beforeCtrlEnterSubmitAction=beforeCtrlEnterSubmitAction}}`);

  assert.notOk(wasCalled);
  assert.notOk(formSubmitted);

  const event = jQuery.Event("keydown");
  event.which = event.keyCode = KeyEvent.DOM_VK_ENTER;
  event.ctrlKey = true;
  this.$("input").trigger('focus');
  this.$("input").trigger(event);

  assert.notOk(wasCalled);
  assert.notOk(formSubmitted);
});

test('when hooking into the before ctrl-enter-submits-form hook', function (assert) {
  let wasCalled = false;
  let formSubmitted = false;
  this.set('beforeCtrlEnterSubmitAction', function (event, component, $form) {
    wasCalled = true;
    assert.ok(Ember.isPresent(event));
    assert.ok(Ember.isPresent(component));
    assert.ok(Ember.isPresent($form));
  });
  this.set('_form', Ember.Object.create({
    onsubmit() {
      formSubmitted = true;
    }
  }));
  this.render(hbs`{{input-text ctrlEnterSubmitsForm?=true beforeCtrlEnterSubmitAction=beforeCtrlEnterSubmitAction _form=_form}}`);

  assert.notOk(wasCalled);
  assert.notOk(formSubmitted);

  const event = jQuery.Event("keydown");
  event.which = event.keyCode = KeyEvent.DOM_VK_ENTER;
  event.ctrlKey = true;
  this.$("input").trigger('focus');
  this.$("input").trigger(event);

  assert.ok(wasCalled);
  assert.ok(formSubmitted);
});

test('when hooking into the after ctrl-enter-submits-form hook', function (assert) {
  let wasCalled = false;
  let formSubmitted = false;
  this.set('afterCtrlEnterSubmitAction', function (event, component, $form) {
    wasCalled = true;
    assert.ok(Ember.isPresent(event));
    assert.ok(Ember.isPresent(component));
    assert.ok(Ember.isPresent($form));
  });
  this.set('_form', Ember.Object.create({
    onsubmit() {
      formSubmitted = true;
    }
  }));
  this.render(hbs`{{input-text ctrlEnterSubmitsForm?=true afterCtrlEnterSubmitAction=afterCtrlEnterSubmitAction _form=_form}}`);

  assert.notOk(wasCalled);
  assert.notOk(formSubmitted);

  const event = jQuery.Event("keydown");
  event.which = event.keyCode = KeyEvent.DOM_VK_ENTER;
  event.ctrlKey = true;
  this.$("input").trigger('focus');
  this.$("input").trigger(event);

  assert.ok(wasCalled);
  assert.ok(formSubmitted);
});

test('when hooking into the before escape-key-clears hook', function (assert) {
  let wasCalled = false;
  this.set('beforeClearAction', function (event, component) {
    wasCalled = true;
    assert.ok(Ember.isPresent(event));
    assert.ok(Ember.isPresent(component));
  });
  this.render(hbs`{{input-text escapeKeyClears?=true beforeClearAction=beforeClearAction}}`);

  assert.notOk(wasCalled);

  const event = jQuery.Event("keyup");
  event.which = event.keyCode = KeyEvent.DOM_VK_ESCAPE;
  this.$("input").trigger(event);

  assert.ok(wasCalled);
});

test('when hooking into the after escape-key-clears hook', function (assert) {
  let wasCalled = false;
  this.set('afterClearAction', function (event, component) {
    wasCalled = true;
    assert.ok(Ember.isPresent(event));
    assert.ok(Ember.isPresent(component));
  });
  this.render(hbs`{{input-text escapeKeyClears?=true afterClearAction=afterClearAction}}`);

  assert.notOk(wasCalled);

  const event = jQuery.Event("keyup");
  event.which = event.keyCode = KeyEvent.DOM_VK_ESCAPE;
  this.$("input").trigger(event);

  assert.ok(wasCalled);
});
