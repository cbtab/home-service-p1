import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
    userData: null,
  });
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const result = await axios.post(`http://localhost:3000/auth/login`, data);
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userData = result.data.userData;
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken, userData: userData });
      if (result.data.userData.role === "admin") {
        console.log("this is admin");
        navigate("/admin/category");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null, error: null });
    navigate("/");
    window.location.reload();
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{ state, login, logout, isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
