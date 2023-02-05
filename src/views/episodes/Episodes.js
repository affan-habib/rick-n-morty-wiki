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
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography>Meet the Episodes</Typography>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ overflowX: "hidden" }}>
        {episode.results.map((el) => (
          <Stack sx={{ border: 1, minWidth: 200, pl: 1 }} justifyContent="center">
            <Typography>{el.episode}</Typography>
            <Typography>{el.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Episodes;
