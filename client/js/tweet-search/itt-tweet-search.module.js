var angular = require('angular');
var IttTweetSearchComponent = require('./itt-tweet-search.component');

var ittTweetSearchModule = angular.module('ittTweetSearch', [
]);

ittTweetSearchModule
    .component('ittTweetSearch', IttTweetSearchComponent);

module.exports = ittTweetSearchModule ;
