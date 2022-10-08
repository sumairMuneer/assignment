import React from "react";
import {Routes, Route,} from "react-router-dom";
import RouteNames from "./RouteNames";
import SignIn from '../pages/auth'


export default function PublicRoutes() {
  return (
    <Routes>

      <Route path={RouteNames.Login.route} element={<SignIn/>}/>

    </Routes>
  );
}
