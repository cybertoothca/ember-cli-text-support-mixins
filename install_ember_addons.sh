#!/bin/sh

yarn add clipboard --dev

ember install @fortawesome/ember-fontawesome
yarn add @fortawesome/free-solid-svg-icons --dev
yarn add @fortawesome/free-brands-svg-icons --dev

ember install ember-auto-import

ember install ember-cli-app-version

ember install ember-cli-bootstrap-4

ember install ember-cli-deploy
ember install ember-cli-deploy-build
ember install ember-cli-deploy-gzip
ember install ember-cli-deploy-s3

ember install ember-cli-element-closest-polyfill

ember install ember-route-action-helper

yarn add keyevent --dev
yarn add ember-cli-node-assets  # this must go into "dependencies" NOT "devDependencies"
