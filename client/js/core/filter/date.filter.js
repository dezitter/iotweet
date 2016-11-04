function IttDateFilter($filter) {
    return function(dateStr, format) {
        var date = new Date(dateStr);

        return $filter('date')(date, format);
    };
}

module.exports = IttDateFilter;
