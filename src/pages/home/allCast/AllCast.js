import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectApi } from "../../../reducers/apiSlice";

const Cast = () => {
  const navigate = useNavigate();
  const {
    character = {
      results: [],
      info: [],
    },
  } = useSelector(selectApi);
  console.log(character);
  return (
    <Box m={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>the Cast</Typography>
      </Stack>
      <Grid container spacing={2}>
        {character.results.map((el) => (
          <Grid item md={3}>
            <img src={el.image} width="100%" height="200px" />
            <Typography>{el.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cast;
