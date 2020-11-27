export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "PROFILE_VISITED":
      console.log(state);
      return { ...state, visited: action.payload };

    default:
      return state;
  }
}
