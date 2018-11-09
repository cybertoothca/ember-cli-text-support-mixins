import Mixin from '@ember/object/mixin';

export default Mixin.create({
  attributeBindings: [
    'aria-describedby',
    'aria-label',
    'aria-labelledby'
  ]
});
