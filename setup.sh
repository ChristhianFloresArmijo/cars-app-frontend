#! /bin/sh
yarn install
yarn cache clean --all
yarn cypress verify
# yarn cypress install

tail -f /dev/null