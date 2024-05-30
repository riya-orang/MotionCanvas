import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppAppBar from "./components/AppAppBar";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Exercises from "./pages/Exercises";
import Index from "./pages/Home";
import User from "./pages/user";
import withRoot from "./components/withRoot";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppAppBar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/user" element={<User />}/>
          <Route exact path="/dashboard" element={<Dashboard />}/>
          <Route exact path="/exercise"  element={<Exercises />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default withRoot(App);
