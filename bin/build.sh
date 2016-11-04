#!/bin/sh

CLIENT_JS_DIR=client/js
DIST_JS_DIR=dist/js

NODE_MODULES_DIR=node_modules/
BROWSERIFY_BIN="$NODE_MODULES_DIR/browserify/bin/cmd.js"
UGLIFY_BIN="$NODE_MODULES_DIR/uglify-js/bin/uglifyjs"

ENTRY_POINT_JS_FILE="$CLIENT_JS_DIR/app.js"
BUNDLE_JS_FILE="$DIST_JS_DIR/bundle.js"
BUNDLE_MIN_JS_FILE="$DIST_JS_DIR/bundle.min.js"

if [ ! -d "$DIST_JS_DIR" ]; then
    mkdir -p "$DIST_JS_DIR"
fi

if [ -f "$BUNDLE_JS_FILE" ]; then
    rm "$BUNDLE_JS_FILE"
fi

if [ -f "$BUNDLE_MIN_JS_FILE" ]; then
    rm "$BUNDLE_MIN_JS_FILE"
fi

echo "Bundling JavaScript..."

$BROWSERIFY_BIN -o dist/js/bundle.js client/js/app.js

case $ENV in
    "prod" | "production")
        $UGLIFY_BIN $BUNDLE_JS_FILE > $BUNDLE_MIN_JS_FILE
        echo "$BUNDLE_MIN_JS_FILE written and minified."
        ;;
    *)
        echo "$BUNDLE_JS_FILE written."
        ;;
esac
