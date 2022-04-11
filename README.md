# ember-cli-text-support-mixins

[![npm version](http://badge.fury.io/js/ember-cli-text-support-mixins.svg)](http://badge.fury.io/js/ember-cli-text-support-mixins) ![downloads](https://img.shields.io/npm/dy/ember-cli-text-support-mixins.svg) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-text-support-mixins/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-text-support-mixins)

[![ember-observer-badge](http://emberobserver.com/badges/ember-cli-text-support-mixins.svg)](http://emberobserver.com/addons/ember-cli-text-support-mixins) [![License](http://img.shields.io/npm/l/ember-cli-text-support-mixins.svg)](LICENSE.md)

Ember.TextSupport enhancements including a `{{input-text}}` and `{{text-area}}` component.

## Compatibility

- Ember.js v2.18 or above
- Ember CLI v2.13 or above
- Node.js v8 or above

## Installation

The following command will install this add-on:

```bash
ember install ember-cli-text-support-mixins
```

### Demo & Documentation

The demonstration web application can be found here:
[https://ember-cli-text-support-mixins.cybertooth.io/](https://ember-cli-text-support-mixins.cybertooth.io/).
[Short description of the addon.]

### Dependencies

#### `ember-cli-element-closest-polyfill`

Polyfill terrible M$ browsers with the `Element.closest()` & `Element.matches()` using
[`ember-cli-element-closest-polyfill`](https://github.com/miguelcobain/ember-cli-element-closest-polyfill).

#### `keyevent`

The constants from [`keyevent`](https://github.com/cybertoothca/keyevent) are installed
by yarn and `ember-cli-node-assets`.

---

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

### Installation

- `git clone git@github.com:cybertoothca/ember-cli-text-support-mixins.git`
- `cd ember-cli-text-support-mixins`
- `yarn install`

### Linting

- `yarn lint:hbs`
- `yarn lint:js`
- `yarn lint:js --fix`

### Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

- `ember serve`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## License

This project is licensed under the [MIT License](LICENSE.md).

# Linking This Add-on For Local Testing

## Linking

Use yarn.

```bash
# from this add-on project
$ yarn link
# from the other project that depends on this add-on
$ yarn link ember-cli-text-support-mixins
```

## Unlinking

Again, use yarn.

```bash
# from the other project that linked to this add-on
$ yarn unlink ember-cli-text-support-mixins
# from this add-on project
$ yarn unlink
```

# Deploying The Dummy Application

Make sure your `~/.aws/credentials` file has a profile named _cybertooth_
with a valid key and secret,

```text
[cybertooth]
aws_access_key_id = <KEY>
aws_secret_access_key = <SECRET>
```

Deploy by invoking the following command: `ember deploy production`

Confirm your changes are showing up at: https://ember-cli-text-support-mixins.cybertooth.io/

You may need to go into AWS CloudFront to expire the index.html file before the site
changes are picked up (see [issue](https://github.com/cybertoothca/ember-cli-text-support-mixins/issues/29)).

# Releasing & Publishing To NPM

```bash
$ yarn publish
$ git push
$ git push --tags
```
