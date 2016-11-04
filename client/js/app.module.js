var angular = require('angular');

var ittTweetListModule = require('./tweet-list/itt-tweet-list.module');
var ittTweetSearchModule = require('./tweet-search/itt-tweet-search.module');

var appModule = angular.module('appModule', [
    ittTweetListModule.name,
    ittTweetSearchModule.name
]);

module.exports = appModule;
