import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// -- STYLES
const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    }
}))(TableCell);
  
const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
}))(TableRow);
  
const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      padding: 10
    },
    table: {
      minWidth: 700,
    },
    tableHeadFiltered: {
      backgroundColor: 'blue'
    },
    infoContainer: {
      padding: 20,
      paddingBottom: 0,
      textAlign: 'left'
    },
    form: {
      marginBottom: 20
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    select: {
        width: 160
    },
    box: {
        display: 'flex'
    },
    buttonContainer: {
        display: 'flex'
    },
    button: {
        display: 'block',
        marginTop: 20,
        marginRight: 5
    }
}));
// -- END STYLES

export {
    StyledTableCell,
    StyledTableRow,
    useStyles
}