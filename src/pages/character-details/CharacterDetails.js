import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { callApi, selectApi } from "../../reducers/apiSlice";
import status from "../../assets/icons/Status.svg";
import species from "../../assets/icons/Species.svg";
import gender from "../../assets/icons/Gender.svg";
import origin from "../../assets/icons/origin.svg";
import location from "../../assets/icons/Location.svg";
import episodes from "../../assets/icons/episodes.svg";
export const CharacterDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  }, [id]);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "episode",
        output: "episode",
      })
    );
  }, []);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} mt={4}>
        {loading && <Loader />}
        <Grid item md={6}>
          <Stack direction="column" alignItems="center" spacing={2}>
            <Typography variant="h2">{singleCharacter?.name}</Typography>
            <img src={singleCharacter?.image} height="auto" width="400px" />
            <Stack direction="row" spacing={2}>
              <Button
                size="small"
                disabled={id == 1}
                startIcon={<KeyboardDoubleArrowLeft />}
                onClick={() =>
                  navigate(`/character/details/${parseInt(id) - 1}`)
                }
              >
                Previous
              </Button>
              <Button
                size="small"
                disabled={id == 20}
                endIcon={<KeyboardDoubleArrowRight />}
                onClick={() =>
                  navigate(`/character/details/${parseInt(id) + 1}`)
                }
              >
                Next
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={2} direction="row">
            <Grid item md={4} className="commmon-design">
              <img src={status} />
              <Typography>Status</Typography>
              <Typography variant="h3">{singleCharacter?.status}</Typography>
            </Grid>
            <Grid item md={4} className="commmon-design">
              <img src={species} />
              <Typography>Species</Typography>
              <Typography variant="h3">{singleCharacter?.species}</Typography>
            </Grid>
            <Grid item md={4} className="commmon-design">
              <img src={gender} />
              <Typography>Gender</Typography>
              <Typography variant="h3">{singleCharacter?.gender}</Typography>
            </Grid>
            <Grid item md={12} className="commmon-design">
              <img src={origin} />
              <Typography>Origin</Typography>
              <Typography variant="h3">
                {singleCharacter?.origin?.name}
              </Typography>
            </Grid>
            <Grid item md={12} className="commmon-design">
              <img src={location} />
              <Typography>Last Known Location</Typography>
              <Typography variant="h3">
                {singleCharacter?.location?.name}
              </Typography>
            </Grid>
            <Grid item md={12} className="commmon-design">
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
    </Container>
  );
};
