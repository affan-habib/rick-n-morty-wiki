import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
import logo from "./assets/Logo.png";
import { Box, Stack } from "@mui/material";
import Home from "./pages/home/Home";
import "./App.css";
import Characters from "./pages/characters/AllCharecters";
import { CharacterDetails } from "./pages/character-details/CharacterDetails";
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
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => navigate("/")}
          />
        </Stack>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/details/:id" element={<CharacterDetails />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
