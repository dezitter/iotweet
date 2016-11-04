var express = require('express');
var Twit = require('twit');
var twitParams = require('./twit-params');

var twit = new Twit(twitParams);
var router = express.Router();

function buildSearchQuery(text) {
    return {
        q: (text || '') + ' #iot',
        count: process.env.TWITTER_SEARCH_COUNT
    };
}

router.get('/api/search', function(req, res) {
    var query = buildSearchQuery(req.query.text);

    twit.get('search/tweets', query, onSearchResult);

    function onSearchResult(err, data) {
        if (err) {
            throw err;
        }

        res.type('json').send(data);
    }
});

module.exports = router;
