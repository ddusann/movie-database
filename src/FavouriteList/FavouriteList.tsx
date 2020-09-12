import React, { useCallback } from 'react';

import Box from "@material-ui/core/Box";
import Item from "./Item";
import List from "@material-ui/core/List";
import Pagination from "./Pagination";
import type { RootState } from '../rootReducer';
import useFavourites from "../useFavourites";
import { useSelector } from 'react-redux';
import useStyles from "./styles";

function MovieList() {
  const styles = useStyles();
  const currentPage = useSelector((state: RootState) => state.favouriteList.page);

  const favourites = useFavourites();
  const favouriteIds = favourites.getIds();
  const handleFavouriteClick = useCallback((id: string, name: string) => {
    if (favouriteIds.includes(id)) {
      favourites.removeItem(id);
    } else {
      favourites.addItem(id, name);
    }
  }, [favourites, favouriteIds]);

  const startItemIndex = (currentPage - 1) * 10;

  return (
    <Box>
      <List className={styles.listItem}>
        {favourites.getItems().slice(startItemIndex, startItemIndex + 10).map(item => (
          <Item
            key={item.id}
            id={item.id}
            isFavourite={favouriteIds.includes(item.id)}
            name={item.name}
            onToggleFavourite={handleFavouriteClick}
          />
        ))}
      </List>
      <Pagination />
    </Box>
  );
}

export default MovieList;
