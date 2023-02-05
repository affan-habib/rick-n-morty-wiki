import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { callApi, selectApi } from "../../reducers/apiSlice";

export const CastDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, singleCharacter = {} } = useSelector(selectApi);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `character/${id}`,
        output: "singleCharacter",
      })
    );
  }, []);

  return (
    <Grid container spacing={2} mt={4}>
      {loading && <Loader />}
      <Grid item md={6}>
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography variant="h2">{singleCharacter?.name}</Typography>
          <img src={singleCharacter?.image} height="auto" width="400px" />
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
            <Typography>{singleCharacter?.status}</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography>Species</Typography>
            <Typography>{singleCharacter?.species}</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography>Gender</Typography>
            <Typography>{singleCharacter?.gender}</Typography>
          </Grid>
          <Grid item md={12}>
            <Typography>Origin</Typography>
            <Typography>{singleCharacter?.origin?.name}</Typography>
          </Grid>
          <Grid item md={12}>
            <Typography>Last Known Location</Typography>
            <Typography>{singleCharacter?.location?.name}</Typography>
          </Grid>
          <Grid item md={12}>
            <Typography>Episodes</Typography>
            <Typography>{singleCharacter?.location?.name}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
