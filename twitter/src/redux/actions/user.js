const profileVisited = (user) => {
  return {
    type: "PROFILE_VISITED",
    payload: user,
  };
};

export { profileVisited };
