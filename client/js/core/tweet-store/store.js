function Store() {
    this.store = {
        tweets: []
    };
}

Store.prototype.get = function getAll() {
    return this.store;
};

Store.prototype.reset = function getAll(tweets) {
    this.store.tweets = tweets;
    return tweets;
};

module.exports = Store;
