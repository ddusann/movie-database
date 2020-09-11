import Box from "@material-ui/core/Box";
import Item from "./Item";
import List from "@material-ui/core/List";
import React from 'react';
import type { RootState } from "../rootReducer";
import { useSelector } from "react-redux";
import useStyles from "./styles";

function MovieList() {
  const styles = useStyles();

  const movieList = useSelector((state: RootState) => state.movieList.movies ?? []);

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
    </Box>
  );
}

export default MovieList;
