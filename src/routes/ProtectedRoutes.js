import React from "react";
import {Routes, Route} from "react-router-dom";
import RouteNames from "./RouteNames";
import Todos from '../pages/todos';
import Todo from '../pages/todos/todo';

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route path={RouteNames.Todo.home} element={<Todos/>}/>
      <Route path={RouteNames.Todo.view} element={<Todo/>}/>
    </Routes>
  );
}
