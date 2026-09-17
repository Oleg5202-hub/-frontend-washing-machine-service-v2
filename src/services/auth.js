import { postData } from "./api";

export function login(email, password) {
  return postData("/login", { email, password });
}

export function register(email, password) {
  return postData("/register", { email, password });
}

export function logout() {
  return postData("/logout", {});
}
