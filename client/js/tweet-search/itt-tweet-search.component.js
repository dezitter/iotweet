function IttTweetSearchController(TweetSearch, TweetStore) {
    var vm = this;

    vm.text = '';
    vm.onSubmit = onSubmit;

    function onSubmit() {
        TweetSearch.get(vm.text).then(function(response) {
            TweetStore.reset(response.data.statuses);
        });
    }
}

module.exports = {
    controller: [
        'core.tweetSearch',
        'core.tweetStore',
        IttTweetSearchController
    ],
    templateUrl: '/js/tweet-search/itt-tweet-search.template.html'
};
