import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
import logo from "./assets/Logo.png";
import { Box, Stack } from "@mui/material";
import Home from "./pages/home/Home";
import "./App.css";
import AllCast from "./pages/allCast/AllCast";
import { CastDetails } from "./pages/castDetails/CastDetails";
function App() {
  const navigate = useNavigate();
  return (
    <Box className="home-content home-content-two">
      <Suspense fallback={<Loader />}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
        >
          <img src={logo} className="logo" onClick={() => navigate("/")} />
        </Stack>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-characters" element={<AllCast />} />
          <Route path="/cast-details/:id" element={<CastDetails />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
