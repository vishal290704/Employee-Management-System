import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import Loader from "./other/Loader";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!userData) {
      alert("Please wait, loading data...");
      return;
    }

    // Admin login
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    // Employee login
    const employee = userData.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return;
    }

    alert("Invalid credentials");
  };

  if (!userData) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
    
      {!user && <Login handleLogin={handleLogin} disabled={!userData} />}

      {user === "admin" && <AdminDashboard changeUser={setUser} />}

      {user === "employee" && (
        <EmployeeDashboard
          changeUser={setUser}
          loggedInUserData={loggedInUserData}
        />
      )}
    </div>
  );
};

export default App;
