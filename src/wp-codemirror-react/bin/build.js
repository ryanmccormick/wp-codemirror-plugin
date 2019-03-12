#!/usr/bin/env node
const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
let config = defaults.__get__('config');

config.output.filename = 'static/wp-codemirror-plugin.js';

config.optimization.splitChunks = {
  cacheGroups: {
    default: false
  }
};

config.optimization.runtimeChunk = false;
