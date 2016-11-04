function IttTweetListController(TweetStore) {
    var vm = this;

    vm.store = {};

    activate();

    function activate() {
        vm.store = TweetStore.get();
    }
}

module.exports = {
    controller: [
        'core.tweetStore',
        IttTweetListController
    ],
    templateUrl: '/js/tweet-list/itt-tweet-list.template.html'
};
