var angular = require('angular');

var coreFilterModule = require('./filter/filter.module.js');
var tweetSearchModule = require('./tweet-search/tweet-search.module');

var coreModule = angular.module('core', [
    coreFilterModule.name,
    tweetSearchModule.name
]);

module.exports = coreModule;
