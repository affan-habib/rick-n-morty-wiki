import React, { Suspense, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import logo from "./assets/Logo.png";
import Stack from "@mui/material/Stack";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import AllCast from "./pages/allCast/AllCast";
import { CastDetails } from "./pages/castDetails/CastDetails";
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Stack alignItems="center" justifyContent="center">
          <img src={logo} className="logo" />
        </Stack>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-cast" element={<AllCast />} />
          <Route path="/cast-details/:id" element={<CastDetails />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
