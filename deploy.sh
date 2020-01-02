#!/usr/bin/env sh

set -e
yarn build
cd docs/.vuepress/dist
git add .
git commit -m 'deploy'
git push -f https://github.com/hhjay/vp-blog.git master:gh-pages
cd -