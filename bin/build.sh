#!/bin/sh

CLIENT_JS_DIR=client/js
DIST_JS_DIR=dist/js

ENTRY_POINT_JS_FILE="$CLIENT_JS_DIR/app.js"
BUNDLE_JS_FILE="$DIST_JS_DIR/bundle.js"

if [ ! -d "$DIST_JS_DIR" ]; then
    mkdir -p "$DIST_JS_DIR"
fi

if [ -f "$BUNDLE_JS_FILE" ]; then
    rm "$BUNDLE_JS_FILE"
fi

echo "Bundling JavaScript..."
browserify -o dist/js/bundle.js client/js/app.js
echo "$BUNDLE_JS_FILE written."
