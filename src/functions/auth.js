import axios from "axios";

const signUp = (user) => {
  return axios.post("/api/auth/signup", user);
};

const login = (user) => {
  return axios.post("/api/auth/login", user);
};

export { signUp, login };
