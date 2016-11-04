function IttTweetSearchController($rootScope, TweetSearch) {
    var vm = this;

    vm.text = '';
    vm.onSubmit = onSubmit;

    function onSubmit() {
        $rootScope.$emit('search:request');

        TweetSearch.get(vm.text).then(function(response) {
            $rootScope.$emit('search:resolve', response.data.statuses);
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
