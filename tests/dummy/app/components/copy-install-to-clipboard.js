import { get } from '@ember/object';
import config from '../config/environment';
import Clipboard from 'clipboard'
import Component from '@ember/component';
import layout from '../templates/components/copy-install-to-clipboard';

export default Component.extend({
  attributeBindings: ['data-clipboard-text', 'href'],

  'data-clipboard-text': '',

  didDestroyElement() {
    this.get('clipboard').destroy();
  },

  didInsertElement() {
    this._super(...arguments);

    const installCommand = `ember install ${get(config, 'APP.name')}@~${get(config, 'APP.version').split('-')[0]}`;
    this.set('data-clipboard-text', installCommand);

    this.set('clipboard', new Clipboard(this.element));
    this.get('clipboard').on('success', () => alert(`'${installCommand}' command copied to your clipboard.`))
  },

  href: 'javascript:void(0)',

  layout,

  tagName: 'a'
});
