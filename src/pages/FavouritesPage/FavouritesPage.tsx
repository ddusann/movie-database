import FavouriteLList from "../../FavouriteList";
import FavouritesButton from "../../FavouriteButton";
import React from 'react';

function FavouritesPage() {
  return (
    <>
      <FavouritesButton isFavouritesPage />
      <FavouriteLList />
    </>
  );
}
  
export default FavouritesPage;
  