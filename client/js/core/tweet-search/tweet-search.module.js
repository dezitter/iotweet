var angular = require('angular');
var TweetSearchFactory = require('./tweet-search.factory');

var tweetSearchModule = angular.module('core.tweetSearch', [

]);

tweetSearchModule
    .factory('core.tweetSearch', ['$http', TweetSearchFactory]);

module.exports = tweetSearchModule ;
