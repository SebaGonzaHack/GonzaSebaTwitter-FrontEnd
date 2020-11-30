export default function tweetReducer(state = [], action) {
  switch (action.type) {
    case "SHOW_TWEETS":
      return action.payload;

    case "LIKE_TWEET":
      return state.map((tweet) => {
        if (tweet.id === action.payload.tweetId) {
          return { ...tweet, likes: [...tweet.likes, action.payload.userId] };
        } else {
          return tweet;
        }
      });
    case "UNLIKE_TWEET":
      return state.map((tweet) => {
        if (tweet.id === action.payload.tweetId) {
          return {
            ...tweet,
            likes: tweet.likes.filter(
              (user) => user.id !== action.payload.userId
            ),
          };
        } else {
          return tweet;
        }
      });

    case "ADD_TWEET":
      return [...state, action.payload];

    default:
      return state;
  }
}
