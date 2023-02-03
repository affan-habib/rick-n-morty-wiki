import React, { Suspense, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import logo from "./assets/Logo.png";
import Stack from "@mui/material/Stack";

import Home from "./pages/home/Home";
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Stack alignItems="center" justifyContent="center">
          <img src={logo} className="logo" />
        </Stack>
        <Home />
      </div>
    </Suspense>
  );
}

export default App;
