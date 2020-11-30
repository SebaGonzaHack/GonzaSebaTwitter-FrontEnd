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

export { profileVisited, saveToken };
