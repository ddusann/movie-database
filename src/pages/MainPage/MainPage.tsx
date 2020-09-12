import FavouritesButton from "../../FavouriteButton";
import MovieList from "../../MovieList";
import React from 'react';
import SearchBox from "../../SearchBox";

function MainPage() {
  return (
    <>
      <FavouritesButton />
      <SearchBox />
      <MovieList />
    </>
  );
}
  
export default MainPage;
  