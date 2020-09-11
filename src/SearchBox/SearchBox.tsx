import * as actions from "./actions";

import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { RootState } from "../rootReducer";
import TextField from "@material-ui/core/TextField";
import { actions as movieListActions } from "../MovieList";
import useStyles from "./styles";

function SearchBox() {
  const styles = useStyles();

  const dispatch = useDispatch();
  const movieName = useSelector((state: RootState) => state.searchBox?.movieName || "");
  const updateMovieName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => dispatch(actions.setMovieName(event.target.value)),
    [dispatch]
  );
  const handleSearchClick = useCallback(() => {
    dispatch(movieListActions.searchRequired({ name: movieName, page: 1 }));
  }, [dispatch, movieName]);

  return (
    <Box className={styles.searchBox}>
      <TextField
        className="movie-name"
        fullWidth
        label="Movie Name"
        placeholder="Enter the name of the movie"
        value={movieName}
        onChange={updateMovieName}
      />
      <Button className="search-button" variant="contained" onClick={handleSearchClick}>Search</Button>
    </Box>
  );
}

export default SearchBox;
