import Mixin from '@ember/object/mixin';

/**
 * Adding a few of the common aria-attributes used on text inputs and textareas.
 */
export default Mixin.create({
  attributeBindings: [
    'aria-describedby',
    'aria-label',
    'aria-labelledby'
  ]
});
