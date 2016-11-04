function IttTweetListController($rootScope) {
    var vm = this;

    vm.tweets = [];
    vm.loading = false;
    vm.showPicture = true;

    activate();

    function activate() {
        $rootScope.$on('search:request', onSearchRequest);
        $rootScope.$on('search:resolve', onSearchResolve);
    }

    function onSearchRequest() {
        vm.loading = true;
        vm.tweets = [];
    }

    function onSearchResolve(e, tweets) {
        vm.loading = false;
        vm.tweets = tweets;
    }
}

module.exports = {
    controller: [
        '$rootScope',
        IttTweetListController
    ],
    templateUrl: '/js/tweet-list/itt-tweet-list.template.html'
};
