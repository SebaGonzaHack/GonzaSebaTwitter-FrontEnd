export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "PROFILE_VISITED":
      console.log(state);
      return { ...state, visited: action.payload };

    case "SAVE_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };

    default:
      return state;
  }
}
