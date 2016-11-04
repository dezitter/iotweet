# Iotweet

A simple web application to fetch & filter tweets including the `#iot` hashtag.

## How to run

1. `$ git clone https://github.com/dezitter/iotweet`
2. `cd iotweet/`
3. `cp env.example .env`
4. Edit the `.env` file and set you [Twitter Application Settings](https://apps.twitter.com/)
5. `mkdir ./dist/js; browserify -o ./dist/js/bundle.js ./client/js/app.js`
6. `node index.js`
7. Go to *http://localhost:3000*
