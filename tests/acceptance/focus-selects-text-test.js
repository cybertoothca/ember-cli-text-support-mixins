import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | focus selects text');

test('when focusSelectsText? is false or turned off', function (assert) {
  visit('/acceptance/focus-selects-text');

  andThen(function () {
    assert.equal(currentURL(), '/acceptance/focus-selects-text');
    assert.equal(find('input.select-enabled').val(), 'Select This Text');
    assert.equal(window.getSelection().toString(), '');
    triggerEvent('input.select-enabled', 'focus');
    andThen(() => {
      assert.equal(window.getSelection().toString(), 'Select This Text');
    });
  });
});

test('when focusSelectsText? is false or turned off', function (assert) {
  visit('/acceptance/focus-selects-text');

  andThen(function () {
    assert.equal(currentURL(), '/acceptance/focus-selects-text');
    assert.equal(find('input.select-disabled').val(), 'Text Will Not Select On Focus');
    assert.equal(window.getSelection().toString(), '');
    triggerEvent('input.select-disabled', 'focus');
    andThen(() => {
      assert.equal(window.getSelection().toString(), '');
    });
  });
});
