import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Component/LoginPage";
import Register from "../Component/Register";
import Signup from "../Component/Signup";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Route  path='/' element={<LoginPage /> } />
            <Route  path='/signup' element={<Signup /> } /> */}
      </Routes>
    </>
  );
};

export default index;
