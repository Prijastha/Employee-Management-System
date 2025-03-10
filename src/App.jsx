// import React from "react";

import { useContext, useEffect, useState } from "react";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";

import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";

import Login from "./components/Auth/Login";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  useEffect(() => {
    // setLocalStorage();
    // getLocalStorage();
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setUser(loggedInUser.role);
      }
    }
  }, [authData]);
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
    } else if (
      authData &&
      authData.employees.find((e) => email == e.email && e.password == password)
    ) {
      setUser("employee");
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
    } else {
      alert("Invalid Credentials");
    }
  };
  const authData = useContext(AuthContext);
  console.log(authData);
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
