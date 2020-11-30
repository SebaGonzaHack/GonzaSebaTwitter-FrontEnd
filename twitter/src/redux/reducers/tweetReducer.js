function tweetReducer(state = {}, action) {
  switch (action.type) {
    case "LIKE_TWEET":
      return state.map((tweet) => {
        if (tweet.id === action.payload.tweetId) {
          return { ...tweet, likes: [...tweet.likes, action.payload.userId] };
        } else {
          return tweet;
        }
      });
    case "UNLIKE_TWEET":
      return;
    default:
      break;
  }
}
