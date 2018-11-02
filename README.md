# ember-cli-text-support-mixins [![GitHub version](http://badge.fury.io/gh/cybertoothca%2Fember-cli-text-field-mixins.svg)](http://badge.fury.io/gh/cybertoothca%2Fember-cli-text-field-mixins) ![](https://embadge.io/v1/badge.svg?start=1.13.0)

[![npm version](http://badge.fury.io/js/ember-cli-text-support-mixins.svg)](http://badge.fury.io/js/ember-cli-text-support-mixins) ![downloads](https://img.shields.io/npm/dy/ember-cli-text-support-mixins.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-text-support-mixins/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-text-support-mixins) ![Dependencies](http://david-dm.org/cybertoothca/ember-cli-text-support-mixins.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-text-support-mixins.svg)](http://emberobserver.com/addons/ember-cli-text-support-mixins) [![License](http://img.shields.io/npm/l/ember-cli-text-support-mixins.svg)](LICENSE.md)

Ember.TextSupport enhancements including a `{{input-text}}` and `{{text-area}}` component.

## Ember Versions

Use `**ember-cli-text-support-mixins@1.1.2**` for Ember applications 2.8 or less.

For Ember applications 2.9 and greater use `**ember-cli-text-support-mixins@2.x**` 

## Tested Against

[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-lts-2.16](https://img.shields.io/badge/ember--try-ember--lts--2.16-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-lts-2.18](https://img.shields.io/badge/ember--try-ember--lts--2.18-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)

[![ember-release](https://img.shields.io/badge/ember--try-ember--release-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)

## Demo

The demonstration web application can be found here:
[http://ember-cli-text-support-mixins.cybertooth.io/](http://ember-cli-text-support-mixins.cybertooth.io/). 

## What Does This Addon Do?

This addon supplies the following _components_:

* `input-text` - a simple extension of the Ember text component that includes the following mixins: 
`ctrl-enter-submits-form.js` (**disabled** by default), `enter-submits-form.js` (**enabled** by default), 
`escape-key-clears.js` (**enabled** by default), `focus-selects-text.js` (**enabled** by default), and
`trigger-focus.js` (always on).
* `text-area` - a simple extension of the Ember text component that includes the following mixins: 
`ctrl-enter-submits-form.js` (**disabled** by default), `escape-key-clears.js` (**enabled** by default), 
`focus-selects-text.js` (**enabled** by default), and `trigger-focus.js` (always on).

Also available are the following _mixins_.  You can incorporate their behaviours into your components:

* `ctrl-enter-submits-form.js` - the `CTRL+ENTER` keypress combination will try to submit the nearest form element.
* `enter-submits-form.js` - pressing `ENTER` in a text input will try to submit the nearest form element.
* `escape-key-clears.js` - pressing the `ESCAPE` key while focused in a text input or textarea will clear all text.
* `focus-selects-text.js` - triggers to select the text components text when focus is placed into the input.
* `trigger-focus.js` - fixes the quirk in Ember where html5 `autofocus` does not work after template re-renders.

_Further information about these items can be found in the Usage section below and in the 
[demo (dummy) application](http://ember-cli-text-support-mixins.cybertooth.io/)._

## Requirements

* Ember >= 1.13.0
* Ember CLI

### Dependencies

#### Bower

The following Bower dependencies are automatically installed into your Ember product:

* `keyevent` - https://github.com/cybertoothca/keyevent - 

## Installation

The following command will install this addon:

```
ember install ember-cli-text-support-mixins
```

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-text-support-mixins` command once
you are done to get the latest version of the addon.

This will likely update the dependencies listed above.

## Usage

As mentioned above there are several examples on the demonstration site:
[http://ember-cli-text-support-mixins.cybertooth.io/](http://ember-cli-text-support-mixins.cybertooth.io/)

### Components

#### `{{input-text}}`

Generates a text-type input: `<input type="text" .../>` that includes clear on Escape press,
submit on Enter, submit on CTRL+Enter, select text when focused and autofocus when the templated is loaded
(and reloaded).

##### Arguments

* `afterClearAction` (defaults to `undefined`) - assign a closure function to this property 
to invoke any type of behaviour after clearing the text.
* `afterCtrlEnterSubmitAction` (defaults to `undefined`) - assign a closure function to this 
property to invoke any type of behaviour after CTRL+ENTER submitting the form. 
* `beforeClearAction` (defaults to `undefined`) - assign a closure function to this property to 
invoke any type of behaviour prior to clearing the text.
* `beforeCtrlEnterSubmitAction` (defaults to `undefined`) - assign a closure function to this property 
to invoke any type of behaviour prior to CTRL+ENTER submitting the form. 
* `ctrlEnterSubmitsForm?` (defaults to `false`) - enable or disable `CTRL`+`ENTER` submitting the nearest form.  
* `enterWillSubmitForm?` (defaults to `true`) - enable or disable `ENTER` submitting the nearest form.
* `escapeKeyClears?` (defaults to `true`) - enable or disable the `ESCAPE` key clearing input/textarea text.
* `focusSelectsText?` (defaults to `true`) -  enable or disable the selecting of input/textarea text when taking focus.
* _All the standard input attributes that apply to text boxes._

#### Examples

```
    {{input-text value=model.someField}}
```

([Check out the demo...](http://ember-cli-text-support-mixins.cybertooth.io/))

#### `{{text-area}}`

Generates a textarea: `<textarea .../>` that includes clear on Escape press, submit on CTRL+Enter, 
select text when focused and autofocus when the templated is loaded (and reloaded).

##### Arguments

* `afterClearAction` (defaults to `undefined`) - assign a closure function to this property 
to invoke any type of behaviour after clearing the text.
* `afterCtrlEnterSubmitAction` (defaults to `undefined`) - assign a closure function to this 
property to invoke any type of behaviour after CTRL+ENTER submitting the form. 
* `beforeClearAction` (defaults to `undefined`) - assign a closure function to this property to 
invoke any type of behaviour prior to clearing the text.
* `beforeCtrlEnterSubmitAction` (defaults to `undefined`) - assign a closure function to this property 
to invoke any type of behaviour prior to CTRL+ENTER submitting the form. 
* `ctrlEnterSubmitsForm?` (defaults to `false`) - enable or disable `CTRL`+`ENTER` submitting the nearest form.  
* `escapeKeyClears?` (defaults to `true`) - enable or disable the `ESCAPE` key clearing input/textarea text.
* `focusSelectsText?` (defaults to `true`) -  enable or disable the selecting of input/textarea text when taking focus.
* _All the standard input attributes that apply to text boxes._

#### Examples

```
{{text-area value=model.someOtherField}}
```

([Check out the demo...](http://ember-cli-text-support-mixins.cybertooth.io/))

### Mixins

#### `ctrl-enter-submits-form.js`

`CTRL+ENTER` keypress combination will try to submit the nearest form element.

Include in your component's js:

```
import CtrlEnterSubmitsForm from 'ember-cli-text-support-mixins/mixins/ctrl-enter-submits-form';
```

#### `enter-submits-form.js`

Pressing `ENTER` in a text input will try to submit the nearest form element.

Include in your component's js:

```
import EnterSubmitsForm from 'ember-cli-text-support-mixins/mixins/enter-submits-form';
```

#### `escape-key-clears.js`
 
Pressing the `ESCAPE` key while focused in a text input or textarea will clear all text.

Include in your component's js:

```
import EscapeKeyClears from 'ember-cli-text-support-mixins/mixins/escape-key-clears';
```

#### `focus-selects-text.js`

Selects the text components text when focus is placed into the input.

Include in your component's js:

```
import FocusSelectsText from 'ember-cli-text-support-mixins/mixins/focus-selects-text';
```

#### `trigger-focus.js`

Fixes the quirk in Ember where html5 `autofocus` does not work after template re-renders.

Include in your component's js:

```
import TriggerFocus from 'ember-cli-text-support-mixins/mixins/trigger-focus';
```

### Troubleshooting And Tips

_None...at least that I can think of._

---

# Ember Addon Building And Testing

## Setup

### Checkout

```
git clone git@github.com:cybertoothca/ember-cli-text-support-mixins.git
```

### With NPM

```
npm install
```

### With Yarn

```
yarn
```

## Running The Dummy Application

* `ember server`
* Visit your app at http://localhost:4200.

## Running Addon Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building The Addon

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

# Linking This Addon For Local Testing

## Linking

1. From the command line at the root of __this__ project run the
`npm link` command to _link_ this addon within your local
node repository.
1. From the _other_ Ember project that you wish to test this addon
in, execute the following command:
`npm link ember-cli-text-support-mixins`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember addon with the version _*_.  It will
look something like this: `"ember-cli-text-support-mixins": "*"`.  Now
when/if you execute `npm install` on this _other_ project it
will know to look for the linked addon rather than fetch it from
the central repository.

## Unlinking

1. Remove the addon from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g ember-cli-text-support-mixins`
1. Remove the reference to the `ember-cli-text-support-mixins`
in your _other_ project's `package.json`.
1. Run an `npm prune` and `bower prune` from the root of your _other_ project's command line.

# Deploying The Dummy Application

Make sure your `~/.aws/credentials` file has a profile named _cybertooth_ 
with a valid key and secret,

```
[cybertooth]
aws_access_key_id = <KEY>
aws_secret_access_key = <SECRET>
```

Deploy by invoking the following command: `ember deploy production`

Confirm your changes are showing up in our S3 container: http://ember-cli-text-support-mixins.cybertooth.io/

# Releasing & Publishing To NPM

```
npm version x.y.z-sub.#
git push
git push --tags
npm publish
```
