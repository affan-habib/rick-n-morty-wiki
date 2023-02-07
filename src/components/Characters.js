import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callApi, selectApi } from "../reducers/apiSlice";

const Characters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "character",
        output: "character",
      })
    );
  }, []);
  const {
    character = {
      results: [],
      info: [],
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
  return (
    <Box position="relative">
      <IconButton
        sx={{
          position: "absolute",
          top: 200,
          zIndex: 50,
          left: -30,
          bottom: "50%",
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
          top: 200,
          zIndex: 50,
          right: -30,
          bottom: '50%',
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
        <Typography variant="h5">Meet the Characters</Typography>
        <Button variant="outlined" onClick={() => navigate("characters")}>
          View All
        </Button>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{ overflowX: "hidden" }}
        ref={elementRef}
      >
        {character.results.map((el, index) => (
          <Box
            sx={{ minWidth: 290, minHeight: 296, cursor: "pointer" }}
            onClick={() => navigate(`character/details/${el.id}`)}
            className="custom-border"
          >
            <img loading="lazy" src={el.image} width="100%" height="230" />
            <Typography>{el.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Characters;
