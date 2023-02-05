import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Loader from "../../components/Loader";
const Cast = () => {
  const [page, setPage] = useState(1);
  const [view, setView] = useState("character");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `${view}/?page=${page}`,
        output: "data",
      })
    );
  }, [page, view]);
  const {
    loading,
    data = {
      results: [],
      info: [],
    },
  } = useSelector(selectApi);

  return (
    <Box m={2}>
      {loading && <Loader />}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2">The Cast</Typography>
        <Box>
          <select
            onChange={(e) => {
              setView(e.target.value);
              setPage(1);
            }}
          >
            <option value="character">Charecter</option>
            <option value="location">Location</option>
            <option value="episode">Episodes</option>
          </select>
          <input type="text" />
        </Box>
      </Stack>
      <Grid container spacing={2}>
        {data.results.map((el) => (
          <Grid item md={3}>
            {view == "character" && (
              <img src={el.image} width="100%" height="200px" />
            )}
            <Typography>{el.name}</Typography>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box py={2}>
          <span>Page</span>
          <IconButton
            disabled={!data.info.prev || page == 1}
            onClick={() => setPage(page - 1)}
            color="primary"
          >
            <ArrowCircleLeftIcon />
          </IconButton>
          <span>{page}</span>
          <IconButton
            disabled={!data.info.next || page == data.info.pages}
            onClick={() => setPage(page + 1)}
          >
            <ArrowCircleRightIcon />
          </IconButton>
          <span>of {data.info.pages}</span>
        </Box>
      </Stack>
    </Box>
  );
};

export default Cast;
