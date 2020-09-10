import Container from "@material-ui/core/Container";
import React from 'react';
import SearchBox from "./SearchBox";
import Title from "./Title";
import useStyles from "./styles";

function App() {
  const styles = useStyles();

  return (
    <Container className={styles.rootContainer} maxWidth="xl">
      <Title />
      <SearchBox />
    </Container>
  );
}

export default App;
