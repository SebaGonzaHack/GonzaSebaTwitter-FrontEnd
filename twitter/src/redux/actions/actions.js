const createToken = (token, username, user) => {
  return {
    type: "CREATE_TOKEN",
    payload: { token, username, user },
  };
};

const createTweet = (text, user) => {
  return {
    type: "CREATE_TWEET",
    payload: { text, user },
  };
};

export { createToken, createTweet };
