export default function twitterReducer(state = {}, action) {
  switch (action.type) {
    case "CREATE_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
      };

    default:
      return state;
  }
}
