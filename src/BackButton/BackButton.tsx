import React, { useCallback } from 'react';

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

const BackButton: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();

  const handleButtonClick = useCallback(() => {
    history.goBack()
  }, [history]);
  
  return (
    <Button className={styles.button} variant="contained" onClick={handleButtonClick}>
      Back
    </Button>
  );
}
  
export default BackButton;
  