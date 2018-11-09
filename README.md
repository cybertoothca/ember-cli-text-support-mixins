# ember-cli-text-support-mixins

[![npm version](http://badge.fury.io/js/ember-cli-text-support-mixins.svg)](http://badge.fury.io/js/ember-cli-text-support-mixins) ![downloads](https://img.shields.io/npm/dy/ember-cli-text-support-mixins.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-text-support-mixins/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-text-support-mixins) 

![Dependencies](http://david-dm.org/cybertoothca/ember-cli-text-support-mixins.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-text-support-mixins.svg)](http://emberobserver.com/addons/ember-cli-text-support-mixins) [![License](http://img.shields.io/npm/l/ember-cli-text-support-mixins.svg)](LICENSE.md)

Ember.TextSupport enhancements including a `{{input-text}}` and `{{text-area}}` component.

## Built With

[![ember-cli-2.18.2](https://img.shields.io/badge/ember--cli-2.18.2-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)

## Tested Against

[![ember-lts-2.4](https://img.shields.io/badge/ember--try-ember--lts--2.4-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-lts-2.8](https://img.shields.io/badge/ember--try-ember--lts--2.8-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-lts-2.16](https://img.shields.io/badge/ember--try-ember--lts--2.16-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)

[![ember-release-2.18](https://img.shields.io/badge/ember--try-ember--release--2.18-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-default](https://img.shields.io/badge/ember--try-ember--default-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)

## Demo & Documentation

The demonstration web application can be found here:
[http://ember-cli-text-support-mixins.cybertooth.io/](http://ember-cli-text-support-mixins.cybertooth.io/). 

## Installation

The following command will install this add-on:

```
ember install ember-cli-text-support-mixins
```

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-text-support-mixins` command once
you are done to get the latest version of the add-on.

This will likely update the dependencies listed above.

### Bower & JQuery

This add-on does not depend on bower libraries when installed in your application or add-on.

This add-on no longer depends on JQuery.  

### Dependencies

#### `ember-cli-element-closest-polyfill`

Polyfill terrible M$ browsers with the `Element.closest()` & `Element.matches()` using 
[`ember-cli-element-closest-polyfill`](https://github.com/miguelcobain/ember-cli-element-closest-polyfill).

#### `keyevent`

The constants from [`keyevent`](https://github.com/cybertoothca/keyevent) are installed
by yarn and `ember-cli-node-assets`.

# Contributing

## Setup

* `git clone git@github.com:cybertoothca/ember-cli-text-support-mixins.git`
* `yarn`

## Running The Dummy Application

* `ember server`
* Visit your app at http://localhost:4200.

## Running Add-on Tests

* `npm test` (Runs `ember try:testall` to test your add-on against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building The Add-on

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

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

Confirm your changes are showing up in our S3 container: http://ember-cli-text-support-mixins.cybertooth.io/

# Releasing & Publishing To NPM

```bash
$ npm version x.y.z-sub.#
$ git push
$ git push --tags
$ npm publish
```
