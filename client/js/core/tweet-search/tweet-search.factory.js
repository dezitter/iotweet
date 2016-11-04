function TweetSearchFactory($http) {
    return {
        get: function(text) {
            return $http.get('/api/search', {
                params: {
                    text: text
                }
            });
        }
    };
}

module.exports = TweetSearchFactory;
