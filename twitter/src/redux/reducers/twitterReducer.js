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
      return {};

    default:
      return state;
  }
}
