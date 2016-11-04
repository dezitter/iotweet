var angular = require('angular');
var tweetSearchModule = require('./tweet-search/tweet-search.module');

var coreModule = angular.module('core', [
    tweetSearchModule.name
]);

module.exports = coreModule;
