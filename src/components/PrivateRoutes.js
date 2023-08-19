// import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// const PrivateRoutes = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const checkUserToken = () => {
//     const userToken = localStorage.getItem('user-token');
//     if (!userToken || userToken === 'undefined') {
//       setIsLoggedIn(false);
//       // return navigate('/auth/login');
//     }
//     setIsLoggedIn(true);
//   };

//   useEffect(() => {
//     checkUserToken();
//   }, [isLoggedIn]);
//   // let auth = { 'token': false }

//   return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
// };

import React from 'react';
// import { Redirect, Route } from "react-router-dom";

function PrivateRoutes() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log('this', isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
