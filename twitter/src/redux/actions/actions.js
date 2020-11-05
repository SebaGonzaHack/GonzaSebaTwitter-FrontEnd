const createToken = (token, username) => {
  return {
    type: "CREATE_TOKEN",
    payload: { token, username },
  };
};

const createTweet = (text, user) => {
  return {
    type: "CREATE_TWEET",
    payload: { text, user },
  };
};

export { createToken, createTweet };
