import React, { Suspense, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import logo from "./assets/Logo.png";
import Stack from "@mui/material/Stack";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AllCast from "./pages/allCast/AllCast";
import { CastDetails } from "./pages/castDetails/CastDetails";
import CustomCard from "./components/CustomCard";
import { Container } from "@mui/material";
function App() {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
        >
          <img src={logo} className="logo" onClick={() => navigate("/")} />
        </Stack>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-cast" element={<AllCast />} />
          <Route path="/cast-details/:id" element={<CastDetails />} />
          <Route path="/components" element={<CustomCard />} />
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
