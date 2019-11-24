import React, { Fragment, useState } from 'react';

// -- UI COMPONENT
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// -- CUSTOM COMPONENT
import Info from './info'
import Form from './form';

// -- SHARED
import { filterByValueRange, extractValues } from './shared'

// -- ASSETS
import { StyledTableCell, StyledTableRow, useStyles} from './styles'
import data from './data.json'
import constants from './constants'


// -- COMPONENT
export default function DataTable() {
  const [state, setState] = useState({
    data: data,
    dataKeys: Object.keys(data[0]),
    type: '',
    textFieldOne: '',
    textFieldTwo: '',
    errorTextFieldOne: '',
    errorTextFieldTwo: '',
    isSubmitting: false
  })
  const classes = useStyles();

  // -- Extract only array keys with number value
  const filterKeyByNumberValue = () => {
    let items = []
    state.dataKeys.forEach(key => {
      if (!isNaN(data[0][key])) {
        items.push(key)
      }
    })
    return items
  }
  // -- end

  // -- Submit form and update table with filtered values
  const handleSubmit = (event) => {
    event.preventDefault();
    let formValObjs = {
      type: event.target.type.value,
      from: event.target.from.value,
      to: event.target.to.value
    }
    if(state.isSubmitting) {
      setState(state => ({ 
        ...state,
        data: filterByValueRange(formValObjs, data) 
      }));
    }
  }
  // -- end

  // -- Validate fields for filtering
  const onChangeFieldOne = (event) => {
    if (!validateField(event.target.value)) {
      setState({ ...state, errorTextFieldOne: constants.validation.errorMessage, isSubmitting: false })
    } else {
      setState({ ...state, errorTextFieldOne: '', isSubmitting: true })
    }
  }

  const onChangeFieldTwo = (event) => {
    if (!validateField(event.target.value)) {
      setState({ ...state, errorTextFieldTwo: constants.validation.errorMessage, isSubmitting: false })
    } else {
      setState({ ...state, errorTextFieldTwo: '', isSubmitting: true })
    }
  }

  const validateField = (value) => {
    return value.match(constants.validation.regExOnlyNumbers)
  }
  // -- end

  // -- Handle changes for select dropdown
  const handleSelectChange = (event) => {
    setState(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }
  // -- end

  const onChange = (event) => {
    if(event.target.name === 'from') {
      setState({ ...state, textFieldOne: event.target.value })
    } else {
      setState({ ...state, textFieldTwo: event.target.value })
    }
  }

  // Reset form
  const reset = (event) => {
    setState(state => ({ 
      ...state, 
      data: data,
      type: '',
      textFieldOne: '',
      textFieldTwo: '',
      errorTextFieldOne: '',
      errorTextFieldTwo: '',
      isSubmitting: false
    }));
  }
  // -- end

  return (
    <Fragment>
    <Info/>
    <Paper className={classes.root}>
      {/* Filter Form ----------------- */}
      <Form
        type={state.type}
        data={filterKeyByNumberValue()}
        textFieldOne={state.textFieldOne}
        textFieldTwo={state.textFieldTwo}
        errorTextFieldOne={state.errorTextFieldOne}
        errorTextFieldTwo={state.errorTextFieldTwo}
        onChangeFieldOne={onChangeFieldOne}
        onChangeFieldTwo={onChangeFieldTwo} 
        onChange={onChange}
        handleSelectChange={handleSelectChange} 
        handleSubmit={handleSubmit}
        reset={reset} />
      {/* End ------------------------- */}

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
              {state.dataKeys.map((row,i) => (
                <StyledTableCell 
                  key={i} 
                  className={state.type === row ? classes.tableHeadFiltered : null }>{row}
                </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {extractValues(state.data).map((array,i) => (
            <StyledTableRow key={i}>
              {array.map((subitem,i) => (
                <StyledTableCell key={i}>{subitem}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Fragment>
  );
}