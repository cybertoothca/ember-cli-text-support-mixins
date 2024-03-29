# How To Contribute

## Installation

* `git clone <repository-url>`
* `cd ember-cli-text-support-mixins`
* `yarn install`

## Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

## Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Linking This Add-on For Local Testing

### Linking

Use yarn.

```bash
# from this add-on project
$ yarn link
# from the other project that depends on this add-on
$ yarn link ember-cli-text-support-mixins
```

### Unlinking

Again, use yarn.

```bash
# from the other project that linked to this add-on
$ yarn unlink ember-cli-text-support-mixins
# from this add-on project
$ yarn unlink
```

## Deploying The Dummy Application

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

## Releasing & Publishing To NPM

```bash
$ yarn publish
$ git push
$ git push --tags
```
