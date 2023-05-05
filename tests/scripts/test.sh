#!/bin/sh

pnpm install http-server
pnpm install wait-on



# Install Playwright
# npx playwright install --with-deps

# Build Storybook
pnpm run build-storybook --quiet

# Serve Storybook and run tests
trap 'kill $(jobs -p)' EXIT

npx concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
  "npx http-server storybook-static --port 6006 --silent --no-clipboard" \
  "npx wait-on tcp:6006 && pnpm run test-storybook"

