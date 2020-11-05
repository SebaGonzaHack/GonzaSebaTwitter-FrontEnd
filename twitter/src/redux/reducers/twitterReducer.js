export default function twitterReducer(state = { logged: false }, action) {
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
