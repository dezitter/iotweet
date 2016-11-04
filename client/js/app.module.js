var angular = require('angular');
var ittTweetSearchModule = require('./tweet-search/itt-tweet-search.module');

var appModule = angular.module('appModule', [
    ittTweetSearchModule.name
]);

module.exports = appModule;
