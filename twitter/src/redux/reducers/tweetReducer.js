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
            likes: tweet.likes.filter(
              (user) => user._id === action.payload.userId
            ),
          };
        } else {
          console.log("no");
          return tweet;
        }
      });

    case "ADD_TWEET":
      return [...state, action.payload];

    default:
      return state;
  }
}
