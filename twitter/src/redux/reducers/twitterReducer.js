export default function twitterReducer(state = {}, action) {
  switch (action.type) {
    case "CREATE_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        user: action.payload.user,
      };

    case "CREATE_TWEET":
      return {
        ...state,
        tweets: [
          ...state.tweets,
          {
            text: action.payload.text,
            createdAt: Date.now(),
            user: action.payload.user,
            likes: [],
          },
        ],
      };

    case "TWEET_LIST":
      return {
        ...state,
        tweets: action.payload,
      };

    default:
      return state;
  }
}
