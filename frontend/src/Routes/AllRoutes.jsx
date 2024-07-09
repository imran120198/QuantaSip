import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
