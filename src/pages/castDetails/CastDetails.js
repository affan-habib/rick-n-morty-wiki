import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectApi } from "../../reducers/apiSlice";

export const CastDetails = () => {
  const { id } = useParams();
  const {
    character = {
      results: [],
      info: [],
    },
  } = useSelector(selectApi);
  const cast = character.results.find((el) => el.id == id);
  console.log(id, cast);
  return (
    <Grid container spacing={2} mt={4}>
      <Grid item md={6}>
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography variant="h2">{cast.name}</Typography>
          <img src={cast.image} height="auto" width="400px" />
          <Stack direction="row" spacing={2}>
            <Button size="small" startIcon={<KeyboardDoubleArrowLeft />}>
              Previous
            </Button>
            <Button size="small" endIcon={<KeyboardDoubleArrowRight />}>
              Next
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={6}>
        <Grid container spacing={2} direction="row">
          <Grid item md={4}>
            <Typography>Status</Typography>
            <Typography>{cast.status}</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography>Species</Typography>
            <Typography>{cast.species}</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography>Gender</Typography>
            <Typography>{cast.gender}</Typography>
          </Grid>
          <Grid item md={12}>
            <Typography>Origin</Typography>
            <Typography>{cast.origin.name}</Typography>
          </Grid>
          <Grid item md={12}>
            <Typography>Last Known Location</Typography>
            <Typography>{cast.location.name}</Typography>
          </Grid>
          <Grid item md={12}>
            <Typography>Episodes</Typography>
            <Typography>{cast.location.name}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
