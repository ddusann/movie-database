import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  searchBox: {
    display: "flex",
    flexDirection: "row",

    "& .search-button": {
        marginLeft: "1rem"
    }
  },
});

export default useStyles;
