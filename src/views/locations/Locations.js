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
      <Stack direction="row" justifyContent="space-between">
        <Typography sx={{ ml: 2 }}>Locations</Typography>
        <Button>View All</Button>
      </Stack>
      <Stack direction="row" sx={{ overflowX: "scroll" }}>
        {location.results.map((el) => (
          <Box sx={{ m: 2, border: 1, minWidth: 200 }}>
            <Typography>#{el.id}</Typography>
            <Typography>{el.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Locations;
