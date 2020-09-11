import React, { useCallback } from 'react';

import Box from "@material-ui/core/Box";
import Item from "./Item";
import List from "@material-ui/core/List";
import Pagination from "./Pagination";
import type { RootState } from "../rootReducer";
import useFavourites from "../useFavourites";
import { useSelector } from "react-redux";
import useStyles from "./styles";

function MovieList() {
  const styles = useStyles();
  const movieList = useSelector((state: RootState) => state.movieList.movies);

  const favourites = useFavourites();
  const favouriteIds = favourites.getIds();
  const handleFavouriteClick = useCallback((id: string, name: string) => {
    if (favouriteIds.includes(id)) {
      favourites.removeItem(id);
    } else {
      favourites.addItem(id, name);
    }
  }, [favourites, favouriteIds]);

  return (
    <Box>
      <List className={styles.listItem}>
        {movieList.map(movieItem => (
          <Item
            key={movieItem.id}
            id={movieItem.id}
            isFavourite={favouriteIds.includes(movieItem.id)}
            name={movieItem.name}
            onToggleFavourite={handleFavouriteClick}
          />
        ))}
      </List>
      <Pagination />
    </Box>
  );
}

export default MovieList;
