#!/bin/bash

rm -rf ./lib
mkdir ./lib
cd src
cp -r ./index.js ../lib
cp -r ./components ../lib
cp -r ./common ../lib
cp -r ./assets ../lib
cp -r ./stylesheets ../lib
