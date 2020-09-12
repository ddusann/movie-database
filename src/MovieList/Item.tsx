import React, { useCallback } from 'react';

import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router-dom';

interface Props {
  id: string;
  isFavourite: boolean;
  name: string;
  onToggleFavourite: (id: string, name: string) => void;
}

const Item: React.FC<Props> = ({ id, isFavourite, name, onToggleFavourite }) => {
  const history = useHistory();

  const handleFavouriteClick = useCallback((event: { stopPropagation: CallableFunction } ) => {
    event.stopPropagation();
    onToggleFavourite(id, name);
  }, [onToggleFavourite, id, name]);

  const handleItemClick = useCallback(() => {
    history.push(`/${id}`);
  }, [history, id]);

  return (
    <ListItem button>
      <ListItemIcon>
      <Button onClick={handleFavouriteClick}>
        {isFavourite ? (
          <Star />
        ) : (
          <StarBorder />
        )}
      </Button>
      </ListItemIcon>
      <ListItemText primary={name} onClick={handleItemClick} />
    </ListItem>
  );
}

export default Item;
