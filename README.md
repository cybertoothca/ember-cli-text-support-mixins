# ember-cli-text-support-mixins [![GitHub version](http://badge.fury.io/gh/cybertoothca%2Fember-cli-text-field-mixins.svg)](http://badge.fury.io/gh/cybertoothca%2Fember-cli-text-field-mixins) ![](https://embadge.io/v1/badge.svg?start=1.13.0)

[![npm version](http://badge.fury.io/js/ember-cli-text-support-mixins.svg)](http://badge.fury.io/js/ember-cli-text-support-mixins) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-text-support-mixins/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-text-support-mixins) ![Dependencies](http://david-dm.org/cybertoothca/ember-cli-text-support-mixins.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-text-support-mixins.svg)](http://emberobserver.com/addons/ember-cli-text-support-mixins) [![License](http://img.shields.io/npm/l/ember-cli-text-support-mixins.svg)](LICENSE.md)

Ember.TextSupport enhancements including a `{{input-text}}` and `{{text-area}}` component.

## Demo

The demonstration web application can be found here:
[http://ember-cli-text-support-mixins.cybertooth.io/](http://ember-cli-text-support-mixins.cybertooth.io/). 

## What Does This Addon Do?

This addon supplies the following _components_:

* `input-text` - 
* `text-area` -

Also available are the following _mixins_:

* `ctrl-enter-submits-form.js` - 
* `escape-key-clears.js` - 
* `focus-selects-text.js` - 
* `trigger-focus.js` - 

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

    $ ember install ember-cli-text-support-mixins

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

##### Arguments

* _All the standard input attributes that apply to text boxes._

#### Examples


([Check out the demo...](http://ember-cli-text-support-mixins.cybertooth.io/))

#### `{{text-area}}`


##### Arguments

* _All the standard input attributes that apply to text boxes._

#### Examples

([Check out the demo...](http://ember-cli-text-support-mixins.cybertooth.io/))

### Troubleshooting And Tips

_None...at least that I can think of._

---

# Ember Addon Building And Testing

## Setup

* `git clone git@github.com:cybertoothca/ember-cli-text-support-mixins.git`
* `npm install`
* `bower install`

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

    [cybertooth]
    aws_access_key_id = <KEY>
    aws_secret_access_key = <SECRET>

Deploy by invoking the following command: `ember deploy production`

Confirm your changes are showing up in our S3 container: http://ember-cli-text-support-mixins.cybertooth.io/
