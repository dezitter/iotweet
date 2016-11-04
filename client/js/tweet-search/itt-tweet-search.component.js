function IttTweetSearchController(TweetSearch) {
    var vm = this;

    vm.text = '';
    vm.onSubmit = onSubmit;

    function onSubmit() {
        TweetSearch.get().then(function(response) {
            console.log(response.data);
        });
    }
}

module.exports = {
    controller: [
        'core.tweetSearch',
        IttTweetSearchController
    ],
    templateUrl: '/js/tweet-search/itt-tweet-search.template.html'
};
