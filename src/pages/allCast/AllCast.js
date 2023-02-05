import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

const Cast = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `character/?page=${page}`,
        output: "character",
      })
    );
  }, [page]);
  const {
    character = {
      results: [],
      info: [],
    },
  } = useSelector(selectApi);

  return (
    <Box m={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2">The Cast</Typography>
        <Box>
          <select>
            <option value="charecter">Charecter</option>
            <option value="location">Location</option>
            <option value="episodes">Episodes</option>
          </select>
          <input type="text" />
        </Box>
      </Stack>
      <Grid container spacing={2}>
        {character.results.map((el) => (
          <Grid item md={3}>
            <img src={el.image} width="100%" height="200px" />
            <Typography>{el.name}</Typography>
          </Grid>
        ))}
      </Grid>
      <Button
        disabled={!character.info.prev || page == 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </Button>
      <Button>{page}</Button>
      <Button
        disabled={!character.info.next || page == character.info.pages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </Box>
  );
};

export default Cast;
