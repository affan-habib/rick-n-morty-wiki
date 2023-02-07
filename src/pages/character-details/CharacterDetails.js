import React, { useEffect } from "react";
import Loader from "../../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import status from "../../assets/icons/Status.svg";
import species from "../../assets/icons/Species.svg";
import gender from "../../assets/icons/Gender.svg";
import origin from "../../assets/icons/origin.svg";
import location from "../../assets/icons/Location.svg";
import episodes from "../../assets/icons/episodes.svg";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
const CharacterDetails = () => {
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
            <img
              alt={singleCharacter?.name}
              src={singleCharacter?.image}
              height="auto"
              width="400px"
            />
            <Stack direction="row" spacing={2}>
              <Button
                size="small"
                variant="outlined"
                disabled={id == 1}
                startIcon={<KeyboardDoubleArrowLeft />}
                onClick={() =>
                  navigate(`/character/details/${parseInt(id) - 1}`)
                }
              >
                Previous
              </Button>
              <Button
                variant="outlined"
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
            <Grid item md={4}>
              <Box className="commmon-design">
                <img src={status} alt="status" />
                <Typography>Status</Typography>
                <Typography variant="h3">{singleCharacter?.status}</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className="commmon-design">
                <img src={species} alt="species" />
                <Typography>Species</Typography>
                <Typography variant="h3">{singleCharacter?.species}</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className="commmon-design">
                <img src={gender} alt="gender" />
                <Typography>Gender</Typography>
                <Typography variant="h3">{singleCharacter?.gender}</Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className="commmon-design">
                <img src={origin} alt="origin" />
                <Typography>Origin</Typography>
                <Typography variant="h3">
                  {singleCharacter?.origin?.name}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className="commmon-design">
                <img src={location} alt="location" />
                <Typography>Last Known Location</Typography>
                <Typography variant="h3">
                  {singleCharacter?.location?.name}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className="commmon-design">
                <img src={episodes} alt="episodes" />
                <Typography variant="h3">Episodes</Typography>
                <ul className="episode-list">
                  {episode.results.map((el, index) => (
                    <li key={index}>{el.name}</li>
                  ))}
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CharacterDetails;
