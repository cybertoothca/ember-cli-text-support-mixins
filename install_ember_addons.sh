#!/bin/sh

ember install ember-cli-bootstrap3-sass
ember install ember-cli-code-coverage
ember install ember-cli-deploy
ember install ember-cli-deploy-build
ember install ember-cli-deploy-gzip
ember install ember-cli-deploy-s3
ember install ember-cli-font-awesome-sass
ember install ember-route-action-helper

yarn add bootswatch@3.3 --dev
yarn add keyevent --dev
yarn add ember-cli-node-assets  # this must go into "dependencies" NOT "devDependencies"
