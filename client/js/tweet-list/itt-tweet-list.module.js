var angular = require('angular');
var IttTweetListComponent = require('./itt-tweet-list.component');

var ittTweetListModule = angular.module('ittTweetList', [
    'core.tweetStore'
]);

ittTweetListModule
    .component('ittTweetList', IttTweetListComponent);

module.exports = ittTweetListModule ;

