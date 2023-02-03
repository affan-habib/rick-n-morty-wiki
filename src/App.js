import React, { Suspense, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader";
import { callApi } from "./reducers/apiSlice";
import logo from "./assets/Logo.png";
import Stack from "@mui/material/Stack";
import { Box, Button, Typography } from "@mui/material";
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
        <Box>
          <Typography>The Rick & MORTY WIKI</Typography>
          <Button variant="outlined">Watch Now</Button>
          <Typography>
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </Typography>
        </Box>
        <Box mt={4}>
          <Typography>Meet the cast</Typography>
          <Typography>Episodes</Typography>
          <Typography>Locations</Typography>
        </Box>
      </div>
    </Suspense>
  );
}

export default App;
