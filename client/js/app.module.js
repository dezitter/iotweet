var angular = require('angular');

var coreModule = require('./core/core.module');
var ittTweetListModule = require('./tweet-list/itt-tweet-list.module');
var ittTweetSearchModule = require('./tweet-search/itt-tweet-search.module');

var appModule = angular.module('appModule', [
    coreModule.name,
    ittTweetListModule.name,
    ittTweetSearchModule.name
]);

module.exports = appModule;
