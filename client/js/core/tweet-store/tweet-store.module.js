var angular = require('angular');
var TweetStoreFactory = require('./tweet-store.factory');

var tweetStoreModule = angular.module('core.tweetStore', [
]);

tweetStoreModule
    .factory('core.tweetStore', [TweetStoreFactory]);

module.exports = tweetStoreModule ;
