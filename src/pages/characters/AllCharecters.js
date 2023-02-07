import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
const AllCharecters = () => {
  const [page, setPage] = useState(1);
  const [view, setView] = useState("character");
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
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
  useEffect(() => {
    const result = data.results.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(result);
  }, [searchInput, data]);
  return (
    <Container maxWidth="xl" m={2}>
      {loading && <Loader />}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2">
          {view == "character"
            ? "The Cast"
            : view == "location"
            ? "All Locations"
            : "Episodes"}
        </Typography>
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
          <input
            type="search"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </Box>
      </Stack>
      <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
        {searchResults.length == 0 && "No Results"}
        {searchResults.map((el, index) => (
          <Box
            key={index}
            className="custom-border"
            sx={{ minWidth: 290, minHeight: 296, mb: 2 }}
          >
            {view == "character" && (
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(`/character/details/${el.id}`)}
              >
                <img src={el.image} width="100%" height="230px" />
              </Box>
            )}
            <Typography>{el.name}</Typography>
          </Box>
        ))}
      </Stack>
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
          <span className="page-number">{page}</span>
          <IconButton
            disabled={!data.info.next || page == data.info.pages}
            onClick={() => setPage(page + 1)}
          >
            <ArrowCircleRightIcon />
          </IconButton>
          <span>of {data.info.pages}</span>
        </Box>
      </Stack>
    </Container>
  );
};

export default AllCharecters;
