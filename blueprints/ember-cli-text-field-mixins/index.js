/*jshint node:true*/
module.exports = {
  name: 'ember-cli-text-field-mixins',
  description: '',
  normalizeEntityName: function () {
  },
  afterInstall: function (/*options*/) {
    return this.addBowerPackagesToProject([{name: 'keyevent'}]);
  }

};
