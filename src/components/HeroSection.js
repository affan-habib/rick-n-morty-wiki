import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import bubbleImg from "../assets/bubble.png";
import portalImg from "../assets/portal.png";
import gunImg from "../assets/Gun.png";
const HeroSection = () => {
  return (
    <Stack>
      <Box sx={{ position: "relative" }}>
        <Typography variant="h1" textAlign="center">
          <img src={bubbleImg} className="bubble" alt="bubble" />
          <span className="span-one">The</span>
          <img src={portalImg} alt="portal" />
          <span className="span-two"> Rick & MORTY </span>
          <span className="span-three">WIKI</span>
        </Typography>
        <img src={gunImg} className="gun" alt="gun" />
      </Box>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Stack spacing={2} direction="row">
          <Button
            sx={{ borderRadius: 10, height: 50, width: 150 }}
            startIcon={<PlayCircleOutlineIcon />}
            variant="contained"
          >
            Watch Now
          </Button>
          <Typography sx={{ width: 400, color: "#14D9E5" }}>
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
