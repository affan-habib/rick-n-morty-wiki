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
import status from "../../assets/icons/Status.svg";
import species from "../../assets/icons/Species.svg";
import gender from "../../assets/icons/Gender.svg";
import origin from "../../assets/icons/origin.svg";
import location from "../../assets/icons/Location.svg";
import episodes from "../../assets/icons/episodes.svg";
export const CastDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    loading,
    singleCharacter = {},
    episode = {
      results: [],
    },
  } = useSelector(selectApi);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `character/${id}`,
        output: "singleCharacter",
      })
    );
  }, []);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "episode",
        output: "episode",
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
            <img src={status} />
            <Typography>Status</Typography>
            <Typography variant="h3">{singleCharacter?.status}</Typography>
          </Grid>
          <Grid item md={4}>
            <img src={species} />
            <Typography>Species</Typography>
            <Typography variant="h3">{singleCharacter?.species}</Typography>
          </Grid>
          <Grid item md={4}>
            <img src={gender} />
            <Typography>Gender</Typography>
            <Typography variant="h3">{singleCharacter?.gender}</Typography>
          </Grid>
          <Grid item md={12}>
            <img src={origin} />
            <Typography>Origin</Typography>
            <Typography variant="h3">
              {singleCharacter?.origin?.name}
            </Typography>
          </Grid>
          <Grid item md={12}>
            <img src={location} />
            <Typography>Last Known Location</Typography>
            <Typography variant="h3">
              {singleCharacter?.location?.name}
            </Typography>
          </Grid>
          <Grid item md={12}>
            <img src={episodes} />
            <Typography variant="h3">Episodes</Typography>
            <ul>
              {episode.results.map((el) => (
                <li>{el.name}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
