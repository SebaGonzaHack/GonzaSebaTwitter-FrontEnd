export default function twitterReducer(state = {}, action) {
  switch (action.type) {
    case "CREATE_TOKEN":
      return { ...state, token: action.payload };

    default:
      return state;
  }
}
