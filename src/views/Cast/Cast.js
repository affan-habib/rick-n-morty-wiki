import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectApi } from "../../reducers/apiSlice";

const Cast = () => {
  const {
    character = {
      results: [],
      info: [],
    },
  } = useSelector(selectApi);
  console.log(character);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography sx={{ ml: 2 }}>Meet the Cast</Typography>
        <Button>View All</Button>
      </Stack>
      <Stack direction="row" sx={{ overflowX: "scroll" }}>
        {character.results.map((el) => (
          <Box sx={{ m: 2, border: 1, minWidth: 200 }}>
            <img src={el.image} width="100%" height="200px" />
            <Typography>{el.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Cast;
