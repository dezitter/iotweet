function IttTweetSearchController($rootScope, TweetSearch) {
    var vm = this;

    vm.text = '';
    vm.onSubmit = onSubmit;

    function onSubmit() {
        $rootScope.$emit('search:request');

        searchTweet(vm.text).then(function(tweets) {
            $rootScope.$emit('search:resolve', tweets);
        });
    }

    function searchTweet(text) {
        return TweetSearch.get(text).then(function(response) {
            return response.data.statuses;
        });
    }
}

module.exports = {
    controller: [
        '$rootScope',
        'core.tweetSearch',
        IttTweetSearchController
    ],
    templateUrl: '/js/tweet-search/itt-tweet-search.template.html'
};
