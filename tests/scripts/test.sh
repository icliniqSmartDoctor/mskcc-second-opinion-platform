#!/bin/sh
pnpm run build-storybook --quiet

npx http-server storybook-static --port 6006 --silent --no-clipboard &

while ! nc -z localhost 6006; do
  sleep 1
done

pnpm run test-storybook

