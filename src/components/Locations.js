import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../reducers/apiSlice";

const Locations = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "location",
        output: "location",
      })
    );
  }, []);
  const {
    location = {
      results: [],
    },
  } = useSelector(selectApi);

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
  console.log(location);
  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        sx={{ position: "absolute", top: 45, zIndex: 50, left: -30 }}
        onClick={() => {
          handleHorizantalScroll(elementRef.current, 25, 200, -20);
        }}
        disabled={arrowDisable}
      >
        <ArrowCircleLeft fontSize="large" />
      </IconButton>
      <IconButton
        sx={{ position: "absolute", top: 45, zIndex: 50, right: -30 }}
        onClick={() => {
          handleHorizantalScroll(elementRef.current, 25, 200, 20);
        }}
      >
        <ArrowCircleRight fontSize="large" />
      </IconButton>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h5">Locations</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{ overflowX: "hidden" }}
        ref={elementRef}
      >
        {location.results.map((el, index) => (
          <Stack
            key={index}
            sx={{ minWidth: 250, p: 2 }}
            justifyContent="center"
            className="custom-border"
          >
            <Typography>#{el.id}</Typography>
            <Typography>{el.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Locations;
