var Store = require('./store');

function TweetStoreFactory() {
    return new Store();
}

module.exports = TweetStoreFactory;
