export default function tweetReducer(state = [], action) {
  switch (action.type) {
    case "SHOW_TWEETS":
      return action.payload;

    case "ADD_LIKE":
      return state.map((tweet) => {
        if (tweet._id === action.payload.tweetId) {
          return { ...tweet, likes: [...tweet.likes, action.payload.userId] };
        } else {
          return tweet;
        }
      });
    case "REMOVE_LIKE":
      return state.map((tweet) => {
        if (tweet._id === action.payload.tweetId) {
          console.log("existe");
          return {
            ...tweet,
            likes: tweet.likes.filter((user) => user !== action.payload.userId),
          };
        } else {
          console.log("no");
          return tweet;
        }
      });

    case "ADD_TWEET":
      const newTweet = { ...action.payload.tweet, user: action.payload.user };
      return [...state, newTweet];

    default:
      return state;
  }
}
