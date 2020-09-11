import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from 'react';
import StarOutlined from '@material-ui/icons/StarBorder';

interface Props {
    name: string;
}

const Item: React.FC<Props> = ({ name }) => {
  return (
    <ListItem button>
        <ListItemIcon>
        <Button>
            <StarOutlined />
        </Button>
        </ListItemIcon>
        <ListItemText primary={name} />
    </ListItem>
  );
}

export default Item;
