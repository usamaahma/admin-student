// route.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Admission from "./components/admission/Admission";
import Accomodation from "./components/accomodation/Accomodation";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/admission",
    element: <Admission />,
  },
  {
    path: "/accomodation",
    element: <Accomodation />,
  },
];

function MainRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default MainRoutes;
