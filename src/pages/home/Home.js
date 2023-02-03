import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

import Episodes from "../episodes/Episodes";
import Locations from "../../views/locations/Locations";
import { callApi } from "../../reducers/apiSlice";
import Loader from "../../components/Loader";
import Cast from "../../views/Cast/Cast";

function Home() {
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
      <div className="Home">
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
          <Cast />
          <Episodes />
          <Locations />
        </Box>
      </div>
    </Suspense>
  );
}

export default Home;
