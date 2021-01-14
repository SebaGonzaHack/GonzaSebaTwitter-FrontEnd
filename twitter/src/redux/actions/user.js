const profileVisited = (user) => {
  return {
    type: "PROFILE_VISITED",
    payload: user,
  };
};

const saveToken = (token, user) => {
  return {
    type: "SAVE_TOKEN",
    payload: { token, user },
  };
};

function followUser(user) {
  return {
    type: "FOLLOW_USER",
    payload: user,
  };
}

function unfollowUser(user) {
  return {
    type: "UNFOLLOW_USER",
    payload: user,
  };
}

export { profileVisited, saveToken, followUser, unfollowUser };
