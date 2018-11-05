import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

/**
 * Simply use the component's `element` to find it's `closest('form')`.
 */
export default Mixin.create({
  /**
   * Grab the nearest form.  Normally you can just ask an input for it's `this.form`, however that doesn't
   * seem to work with Ember wrapped TextSupport components?  Using a jQuery find of the closest form instead.
   * @private
   */
  _form: computed(function () {
    return this.element.closest('form');
  })
});
