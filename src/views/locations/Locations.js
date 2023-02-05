import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

const Locations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "location",
        output: "location",
      })
    );
  }, []);
  const {
    location = {
      results: [],
    },
  } = useSelector(selectApi);
  console.log(location);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography>Locations</Typography>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ overflowX: "hidden" }}>
        {location.results.map((el) => (
          <Stack
            sx={{ border: 1, minWidth: 200, pl: 1 }}
            justifyContent="center"
          >
            <Typography>#{el.id}</Typography>
            <Typography>{el.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Locations;
