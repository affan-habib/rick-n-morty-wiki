import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

const Episodes = () => {
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
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography sx={{ ml: 2 }}>Meet the Episodes</Typography>
        <Button>View All</Button>
      </Stack>
      <Stack direction="row" sx={{ overflowX: "scroll" }}>
        {episode.results.map((el) => (
          <Box sx={{ m: 2, border: 1, minWidth: 200 }}>
            <Typography>{el.episode}</Typography>
            <Typography>{el.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Episodes;
