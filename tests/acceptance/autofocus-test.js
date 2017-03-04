import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | autofocus');

test('when autofocus is enabled and focusSelectsText? is also enabled', function (assert) {
  visit('/acceptance/autofocus-with-select-text');

  andThen(function () {
    assert.equal(currentURL(), '/acceptance/autofocus-with-select-text');
    assert.equal(document.activeElement.autofocus, true);
    assert.equal(window.getSelection().toString(), 'Autofocus This Text');
  });
});

test('when revisiting a template that already had been autofocused', function (assert) {
  visit('/acceptance/autofocus-with-select-text');

  andThen(function () {
    assert.equal(currentURL(), '/acceptance/autofocus-with-select-text');
    assert.equal(document.activeElement.autofocus, true);
    assert.equal(window.getSelection().toString(), 'Autofocus This Text');
  });
});

test('when autofocus is enabled and focusSelectsText? is disabled', function (assert) {
  visit('/acceptance/autofocus-select-text-disabled');

  andThen(function () {
    assert.equal(currentURL(), '/acceptance/autofocus-select-text-disabled');
    assert.equal(document.activeElement.autofocus, true);
    assert.equal(window.getSelection().toString(), '');
  });
});
