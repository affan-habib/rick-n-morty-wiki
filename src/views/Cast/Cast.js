import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callApi, selectApi } from "../../reducers/apiSlice";

const Cast = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "character",
        output: "character",
      })
    );
  }, []);
  const {
    character = {
      results: [],
      info: [],
    },
  } = useSelector(selectApi);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography sx={{ ml: 2 }}>Meet the Cast</Typography>
        <Button onClick={() => navigate("all-cast")}>View All</Button>
      </Stack>
      <Stack direction="row" sx={{ overflowX: "scroll" }}>
        {character.results.map((el) => (
          <Box
            sx={{ m: 2, border: 1, minWidth: 200, cursor: "pointer" }}
            onClick={() => navigate(`cast-details/${el.id}`)}
          >
            <img src={el.image} width="100%" height="200px" />
            <Typography>{el.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Cast;
