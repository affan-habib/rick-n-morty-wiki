import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import Locations from "../../views/locations/Locations";
import Episodes from "../../views/episodes/Episodes";
import { callApi } from "../../reducers/apiSlice";
import Loader from "../../components/Loader";
import Cast from "../../views/Cast/Cast";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="Home">
        <Box m={2}>
          <Typography variant="h1">The Rick & MORTY WIKI</Typography>
          <Button
            startIcon={<PlayCircleOutlineIcon />}
            sx={{ p: 2, fontSize: 24 }}
          >
            Watch Now
          </Button>
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
