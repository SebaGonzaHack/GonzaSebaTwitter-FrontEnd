function addLike(userId, tweetId) {
  return {
    type: "ADD_LIKE",
    payload: { userId, tweetId },
  };
}

function removeLike(userId, tweetId) {
  return {
    type: "REMOVE_LIKE",
    payload: { userId, tweetId },
  };
}

function showTweets(tweets) {
  return {
    type: "SHOW_TWEETS",
    payload: tweets,
  };
}

function addTweet(tweet, user) {
  return {
    type: "ADD_TWEET",
    payload: { tweet, user },
  };
}

export { addLike, removeLike, showTweets, addTweet };
