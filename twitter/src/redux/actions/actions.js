const createToken = (token) => {
  return {
    type: "CREATE_TOKEN",
    payload: token,
  };
};

export default createToken;
