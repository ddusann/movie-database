import * as actions from "./actions";

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import Item from "./Item";
import List from "@material-ui/core/List";
import Pagination from "@material-ui/lab/Pagination";
import type { RootState } from "../rootReducer";
import useStyles from "./styles";

function MovieList() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const movieName = useSelector((state: RootState) => state.searchBox.movieName);
  const isLoading = useSelector((state: RootState) => state.movieList.loading);
  const movieList = useSelector((state: RootState) => state.movieList.movies);
  const totalPagesCount = useSelector((state: RootState) => state.movieList.totalCount);

  const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(actions.searchRequired({ name: movieName, page }));
    dispatch(actions.setLoading(true));
  }, [dispatch, movieName]);

  return (
    <Box>
      <List className={styles.listItem}>
        {movieList.map(movieItem => (
          <Item
            key={movieItem.id}
            name={movieItem.name}
          />
        ))}
      </List>
      {totalPagesCount > 1 && (
        <Pagination count={totalPagesCount} disabled={isLoading} onChange={handlePageChange} />
      )}
    </Box>
  );
}

export default MovieList;
