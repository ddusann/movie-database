import React, { useCallback } from 'react';

import Button from "@material-ui/core/Button";
import Star from '@material-ui/icons/Star';
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

interface Props {
  isFavouritesPage?: boolean;
}

const FavouriteButton: React.FC<Props> = ({ isFavouritesPage }) => {
  const styles = useStyles();
  const history = useHistory();

  const handleButtonClick = useCallback(() => {
    if (isFavouritesPage) {
      history.push("/");
    } else {
      history.push("/favourites");
    }
  }, [history, isFavouritesPage]);
  
  return (
    <Button className={styles.button} variant="contained" onClick={handleButtonClick}>
      {isFavouritesPage ? (
        <>
          <Star /> Hide Favourites
        </>
      ) : (
        <>
          <Star /> Show Favourites
        </>
      )}
    </Button>
  );
}
  
export default FavouriteButton;
  