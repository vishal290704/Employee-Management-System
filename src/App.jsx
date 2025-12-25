import React, {useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import Loader from './other/Loader'

const App = () => {

 const [user, setUser] = useState(null)
 const [loggedInUserData, setLoggedInUserData] = useState(null )
 const [userData] = useContext(AuthContext)

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    // console.log(userData);
    setUser(userData.role)
    setLoggedInUserData(userData.data || null)
  }
},[])

const handleLogin = (email, password) => {

  //stop login before data loads
  if (!userData) {
    alert("Please wait, loading data...");
    return;
  }

  // Admin login code
  if (email === 'admin@example.com' && password === '123') {
    setUser('admin');
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ role: 'admin' })
    );
    return;
  }

  // Employee login code
  const employee = userData.find(
    (e) => e.email === email && e.password === password
  );

  if (employee) {
    setUser('employee');
    setLoggedInUserData(employee);
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ role: 'employee', data: employee })
    );
    return;
  }

  alert("Invalid credentials");
};

if (!userData) {
  return <Loader />;
}


  return (
    <>
    {!user ? <Login handleLogin={handleLogin} disabled={!userData} /> : ''}
    {user =='admin' ? <AdminDashboard changeUser = {setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser = {setUser} loggedInUserData={loggedInUserData} /> : '')}
    
    </>
  )
}

export default App