import React, { Suspense } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Locations from "../../views/locations/Locations";
import Episodes from "../../views/episodes/Episodes";
import Loader from "../../components/Loader";
import Cast from "../../views/Cast/Cast";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Box>
        <Typography variant="h1">
          <span className="span-one">The</span> Rick{" "}
          <span className="span-two">&</span>
        </Typography>
        <Typography variant="h1">MORTY WIKI</Typography>
        <Button startIcon={<PlayCircleOutlineIcon />}>Watch Now</Button>
        <Typography>
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Cast />
        <Episodes />
        <Locations />
      </Stack>
    </Suspense>
  );
}

export default Home;
