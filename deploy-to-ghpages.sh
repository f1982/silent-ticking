#!/usr/bin/env sh

set -e
yarn run build

cd build
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:f1982/silent-ticking.git master:gh-pages

cd -