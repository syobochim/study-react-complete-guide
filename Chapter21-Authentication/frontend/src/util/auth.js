import { redirect } from "react-router-dom";

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthToken = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
};
