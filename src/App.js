import React, { Suspense, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader";
import { callApi } from "./reducers/apiSlice";
import logo from "./assets/Logo.png";
import Stack from "@mui/material/Stack";
import { Box, Button, Typography } from "@mui/material";
import Cast from "./pages/Cast/Cast";
import Episodes from "./pages/episodes/Episodes";
import Locations from "./views/locations/Locations";
import Home from "./pages/home/Home";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "character",
        output: "character",
      })
    );
  }, []);
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
