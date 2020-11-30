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

export { addLike, removeLike };
