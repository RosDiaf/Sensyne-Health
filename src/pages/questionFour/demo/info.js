import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// -- ASSETS
import { useStyles} from './styles'

export default function Info() {
    const classes = useStyles();
    return(
        <Grid container>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <div className={classes.infoContainer}>
                        <h1>Test code to solve</h1>
                        <p>Select category and filter <strong>from</strong> and <strong>to</strong> values you want to view <br />
                        (E.g. <strong>Mkt Cap $(m)</strong> from <strong>1</strong> to <strong>90 </strong>
                        should return only <strong>81</strong> in the same column)<br /><br />
                        Followings need to be fixed:
                        </p>
                        <ul>
                            <li>Filter form is not working</li>
                            <li>Allow negative values</li>
                        </ul>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )   
}