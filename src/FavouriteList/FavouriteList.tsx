import React, { useCallback } from 'react';

import Box from "@material-ui/core/Box";
import Item from "./Item";
import List from "@material-ui/core/List";
import Pagination from "./Pagination";
import useFavourites from "../useFavourites";
import useStyles from "./styles";

function MovieList() {
  const styles = useStyles();

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
        {favourites.getItems().map(item => (
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
