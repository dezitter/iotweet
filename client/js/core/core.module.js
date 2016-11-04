var angular = require('angular');

var tweetSearchModule = require('./tweet-search/tweet-search.module');
var tweetStoreModule = require('./tweet-store/tweet-store.module');

var coreModule = angular.module('core', [
    tweetSearchModule.name,
    tweetStoreModule.name
]);

module.exports = coreModule;
