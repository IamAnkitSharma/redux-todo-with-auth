const intialState = {
  isLoggedIn: false,
};
const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        "isLoggedIn": true,
      };

    case "SIGN_OUT":
      return {
        ...state,
        "isLoggedIn": false,
      };
    default:
      return state;
  }
};

export default authReducer;
