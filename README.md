# Iotweet

A simple web application to fetch & filter tweets including the `#iot` hashtag.

## How to run

1. `$ git clone https://github.com/dezitter/iotweet`
2. `cd iotweet/`
3. `cp env.example .env`
4. `mkdir ./dist/js; browserify -o ./dist/js/bundle.js ./client/js/app.js`
5. `node index.js`
6. Go to *http://localhost:3000*
