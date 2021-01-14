export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "PROFILE_VISITED":
      return { ...state, visited: action.payload };

    case "SAVE_TOKEN":
      const user = { ...action.payload.user, token: action.payload.token };
      return user;

    case "FOLLOW_USER":
      console.log(action.payload);

      const userAdd = [...state.visited.userFollowers, action.payload];

      const newState = { ...state.visited, userFollowers: userAdd };

      return { ...state, visited: newState };

    case "UNFOLLOW_USER":
      const userRemove = state.visited.userFollowers.filter(
        (user) => user._id !== action.payload._id
      );

      const clearState = { ...state.visited, userFollowers: userRemove };

      return { ...state, visited: clearState };

    default:
      return state;
  }
}
