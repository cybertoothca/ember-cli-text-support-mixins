/*jshint node:true*/
module.exports = {
  name: 'ember-cli-text-support-mixins',
  description: '',
  normalizeEntityName: function () {
  },
  afterInstall: function (/*options*/) {
    return this.addPackagesToProject([{name: 'keyevent'}]);
  }
};
