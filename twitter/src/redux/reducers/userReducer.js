export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "PROFILE_VISITED":
      console.log(state);
      return { ...state, visited: action.payload };

    case "SAVE_TOKEN":
      const user = { ...action.payload.user, token: action.payload.token };
      return user;

    default:
      return state;
  }
}
