import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowLeftRounded,
} from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callApi, selectApi } from "../reducers/apiSlice";

const Episodes = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const {
    episode = {
      results: [],
      info: [],
    },
  } = useSelector(selectApi);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "episode",
        output: "episode",
      })
    );
  }, []);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        sx={{
          position: "absolute",
          top: 90,
          zIndex: 50,
          left: -30,
          bottom: "50%",
          opacity: `${arrowDisable ? 0 : 1}`,
        }}
        onClick={() => {
          handleHorizantalScroll(elementRef.current, 25, 200, -20);
        }}
        disabled={arrowDisable}
      >
        <ArrowCircleLeft fontSize="large" />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: 100,
          zIndex: 50,
          right: -30,
          bottom: "50%",
        }}
        onClick={() => {
          handleHorizantalScroll(elementRef.current, 25, 200, 20);
        }}
      >
        <ArrowCircleRight fontSize="large" />
      </IconButton>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5">Meet the Episodes</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{ overflowX: "hidden" }}
        ref={elementRef}
      >
        {episode.results.map((el, index) => (
          <Stack
            key={index}
            sx={{ minWidth: 360, p: 2, height: 96 }}
            justifyContent="center"
            className="custom-border-two"
          >
            <Typography>{el.episode}</Typography>
            <Typography>{el.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Episodes;
