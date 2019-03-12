#!/bin/bash

## Environment
PROJECT_ROOT=`pwd`
BUILD_ROOT=`pwd`/src
ARTIFACT_STORE=$PROJECT_ROOT/artifact-store
REACT_PROJECT_ROOT=$BUILD_ROOT/wp-codemirror-react
WP_PLUGIN_PROJECT_ROOT=$BUILD_ROOT/wp-codemirror-plugin

## Clean artifact store dir
rm -rf artifact-store
rm -rf dist
mkdir artifact-store
mkdir dist

## Build React Component
cd $REACT_PROJECT_ROOT

npm install
npm run build

## Copy React Build Artifacts
cd build/static/css
mv ./main* ../wp-codemirror-plugin.css
cd ..
rm -r css
cd ..
cp -a ./static $ARTIFACT_STORE

## Copy Wordpress Plugin Artifacts
cd $WP_PLUGIN_PROJECT_ROOT
cp wp-codemirror-plugin.php $ARTIFACT_STORE
cp readme.txt $ARTIFACT_STORE

## Bundle Plugin for Install
cd $ARTIFACT_STORE
zip -r -X ../dist/wp-codemirror-plugin.zip .

## Cleanup
cd $PROJECT_ROOT
rm -rf ./artifact-store/