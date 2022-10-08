import React, {useState} from "react";
import {Routes, Route, BrowserRouter, Navigate,} from "react-router-dom";

import PublicRoutes from "./routes/PublicRoutes";
import Header from "./components/header/index";
import ProtectedRoutes from "./routes/ProtectedRoutes";

import "./App.css";
import "./assets/index.scss";

function App() {
  const [userLoggedIn] = useState(sessionStorage.getItem('userEmail'))
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route
          path="/todos/*"
          element={userLoggedIn ? <ProtectedRoutes/> : <Navigate to="/login"/>}
        />
        <Route
          path="/todo/*"
          element={userLoggedIn ? <ProtectedRoutes/> : <Navigate to="/login"/>}
        />
        <Route path="/*" element={<PublicRoutes/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
