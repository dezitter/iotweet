function TweetSearchFactory($http) {
    return {
        get: function(text) {
            return $http.get('/api/search', { text: text });
        }
    };
}

module.exports = TweetSearchFactory;
