import React, { Fragment } from 'react';

// -- UI COMPONENT
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from "@material-ui/core/Select";
import TextField from '@material-ui/core/TextField';

// -- ASSETS
import { useStyles} from './styles'

export default function Form(props) {
    const classes = useStyles();
    const onChangeFieldOne = (event) => props.onChangeFieldOne(event)
    const onChangeFieldTwo = (event) => props.onChangeFieldTwo(event)
    const onChange = (event) => props.onChange(event)
    const handleSelectChange = (event) => props.handleSelectChange(event)
    const onSubmit = (event) => props.handleSubmit(event)
    const onClick = (event) => props.reset(event)

    return (
        <Fragment>
            <form onSubmit={onSubmit} className={classes.form}>
            <div className={classes.box}>
                <div>
                <InputLabel id="select-type">Select type</InputLabel>
                <Select
                    className={classes.select}
                    labelId="select-type"
                    value={props.type}
                    displayEmpty
                    onChange={handleSelectChange}
                    inputProps={{
                        name: "type",
                        id: "type"
                    }}
                >
                    {props.data.map((option, i) => (
                        <MenuItem key={i} value={option}>
                        { option }
                        </MenuItem>
                    ))}
                </Select>
                </div>
                <TextField
                    name="from"
                    id="from"
                    label="From"
                    value={props.textFieldOne}
                    className={classes.textField}
                    error ={props.errorTextFieldOne.length === 0 ? false : true }
                    helperText={props.errorTextFieldOne}
                    onKeyUp={onChangeFieldOne}
                    onChange={onChange}
                />
                <TextField
                    name="to"
                    id="to"
                    label="To"
                    value={props.textFieldTwo}
                    className={classes.textField}
                    error ={props.errorTextFieldTwo.length === 0 ? false : true }
                    helperText={props.errorTextFieldTwo}
                    onKeyUp={onChangeFieldTwo}
                    onChange={onChange}
                />
            </div>
            <div className={classes.buttonContainer}>
                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" type="button" className={classes.button} onClick={onClick}>
                    Reset
                </Button>
            </div>
            </form>
        </Fragment>
    )
}