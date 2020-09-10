import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import React from 'react';
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";

function SearchBox() {
  const styles = useStyles();

  return (
    <Box className={styles.searchBox}>
      <TextField
        className="movie-name"
        fullWidth
        label="Movie Name"
        placeholder="Enter the name of the movie"
      />
      <Button className="search-button" variant="contained">Search</Button>
    </Box>
  );
}

export default SearchBox;
