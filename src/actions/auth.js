export const signin = (email, password) => {
  localStorage.setItem("token", Math.random().toString());
  return {
    type: "SIGN_IN"
  };
};
export const signedIn = (token) => {
  localStorage.setItem("token",token)
  return {
    type: "SIGN_IN",
  };
};

export const logout = () => {
  localStorage.removeItem("token")
  return {
    type: "SIGN_OUT",
  };
};
