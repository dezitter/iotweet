var express = require('express');
var Twit = require('twit');

var twit = new Twit({
    consumer_key       : process.env.TWITTER_CONSUMER_KEY,
    consumer_secret    : process.env.TWITTER_CONSUMER_SECRET,
    access_token       : process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var router = express.Router();

function buildSearchQuery(text) {
    return {
        q: (text || '') + ' #iot',
        count: 100
    };
}

router.get('/api/search', function(req, res) {
    var query = buildSearchQuery(req.query.text);

    twit.get('search/tweets', query, function(err, data) {
        if (err) {
            throw err;
        }

        res.type('json').send(data);
    });
});

module.exports = router;
