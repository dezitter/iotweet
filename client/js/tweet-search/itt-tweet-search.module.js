var angular = require('angular');
var IttTweetSearchComponent = require('./itt-tweet-search.component');

var ittTweetSearchModule = angular.module('ittTweetSearch', [
    'core.tweetSearch'
]);

ittTweetSearchModule
    .component('ittTweetSearch', IttTweetSearchComponent);

module.exports = ittTweetSearchModule ;
