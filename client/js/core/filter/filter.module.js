var angular = require('angular');

var IttDateFilter = require('./date.filter');

var coreFilterModule = angular.module('core.filter', [
]);

coreFilterModule
    .filter('ittDate', ['$filter', IttDateFilter]);

module.exports = coreFilterModule;
