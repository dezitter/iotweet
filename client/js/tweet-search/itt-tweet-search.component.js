function IttTweetSearchController() {
    var vm = this;

    vm.text = '';
    vm.onSubmit = onSubmit;

    function onSubmit() {
        if (vm.text) {
            console.log(vm.text);
        }
    }
}

module.exports = {
    controller: [
        IttTweetSearchController
    ],
    templateUrl: '/js/tweet-search/itt-tweet-search.template.html'
};
