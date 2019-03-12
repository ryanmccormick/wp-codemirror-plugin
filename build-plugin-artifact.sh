#!/bin/bash
BUILD_ROOT=`pwd`
ARTIFACT_STORE=$BUILD_ROOT/artifact-store

rm -rf artifact-store
mkdir artifact-store

## Build React Component
cd wp-codemirror-react
REACT_PROJECT_ROOT=`pwd`

#npm install
npm run build
cd build/static/css
mv ./main* ../wp-codemirror-plugin.css
cd ..
rm -r css
cd ..
cp -a ./static $ARTIFACT_STORE


#mv build/css/main* ..
#rm -r css
#cd $BUILD_ROOT
#
#
#
#
#
#
#
#cp ./wp-codemirror-plugin/wp-codemirror-plugin.php ./artifact-store
