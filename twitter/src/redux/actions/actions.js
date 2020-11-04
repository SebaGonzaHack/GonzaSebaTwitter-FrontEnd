const createToken = (token, username) => {
  return {
    type: "CREATE_TOKEN",
    payload: { token, username },
  };
};

export default createToken;
