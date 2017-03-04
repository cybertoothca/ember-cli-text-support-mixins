/* global KeyEvent */
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | escape clears');

test('when escape clears text by default', function (assert) {
  visit('/acceptance/escape-clears-text');

  andThen(function () {
    assert.equal(currentURL(), '/acceptance/escape-clears-text');
    assert.equal(find('input.escape-clears-by-default').val(), 'Escape Clears This Text');
    keyEvent('input.escape-clears-by-default', 'keyup', KeyEvent.DOM_VK_ESCAPE);
    andThen(() => {
      assert.equal(find('input.escape-clears-by-default').val(), '');
    });

  });
});

test('when escape clears text because escapeKeyClears? was set to true', function (assert) {
  visit('/acceptance/escape-clears-text');

  andThen(function () {
    assert.equal(currentURL(), '/acceptance/escape-clears-text');
    assert.equal(find('input.escape-clears-enabled').val(), 'Escape Clears This Text');
    keyEvent('input.escape-clears-enabled', 'keyup', KeyEvent.DOM_VK_ESCAPE);
    andThen(() => {
      assert.equal(find('input.escape-clears-enabled').val(), '');
    });

  });
});

test('when escape WILL NOT clear text because escapeKeyClears? was set to false', function (assert) {
  visit('/acceptance/escape-clears-text');

  andThen(function () {
    assert.equal(currentURL(), '/acceptance/escape-clears-text');
    assert.equal(find('input.escape-clears-disabled').val(), 'Escape Will Not Clear This Text');
    keyEvent('input.escape-clears-disabled', 'keyup', KeyEvent.DOM_VK_ESCAPE);
    andThen(() => {
      assert.equal(find('input.escape-clears-disabled').val(), 'Escape Will Not Clear This Text');
    });

  });
});
