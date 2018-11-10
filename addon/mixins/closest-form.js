import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

/**
 * Simply use the component's `element` to find it's `closest('form')`.
 *
 * Leveraging some polyfill from `ember-cli-element-closest-polyfill`.
 */
export default Mixin.create({
  /**
   * Grab the nearest form.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
   * @private
   */
  _form: computed(function () {
    return this.element.closest('form');
  })
});
