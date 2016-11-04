function IttTweetListController() {
    var vm = this;

    vm.tweets = [
        { text: 'foo', user: { name: 'John' } },
        { text: 'bar', user: { name: 'Jack' } },
        { text: 'quz', user: { name: 'Jill' } }
    ];
}

module.exports = {
    controller: [
        IttTweetListController
    ],
    templateUrl: '/js/tweet-list/itt-tweet-list.template.html'
};
