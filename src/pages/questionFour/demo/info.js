import React from 'react'

// -- ASSETS
import { useStyles} from './styles'

export default function Info() {
    const classes = useStyles();
    return(
        <div className={classes.infoContainer}>
            <p>Select category and filter from to values you want to view <br />
            (E.g. <strong>Mkt Cap $(m)</strong> from <strong>1</strong> to <strong>90 </strong>
            should return only <strong>81</strong> in the same column)
            </p>
            <ul>
            <li>Filter form is not working</li>
            <li>Allow negative values</li>
            </ul>
        </div>
    )   
}