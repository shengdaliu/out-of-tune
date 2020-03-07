import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import { Tonal, Scale, Progression, Mode, Chord, Key } from '@tonaljs/modules'

function ParameterPannel (props) {
  return (
    <div>
      <FormControl variant="outlined" style={{ width: '120px', padding: '10px', margin: '20px' }}>
        <InputLabel id="select-outlined-label">Key</InputLabel>
        <Select
          labelId="select-outlined-label"
          id="select-outlined"
          value={props.keySignature}
          onChange={props.handleKeyChangeEvent}
        >
          <MenuItem value={'C'}>Do    C</MenuItem>
          <MenuItem value={'D'}>Re    D</MenuItem>
          <MenuItem value={'E'}>Mi    E</MenuItem>
          <MenuItem value={'F'}>Fa    F</MenuItem>
          <MenuItem value={'G'}>Sol   G</MenuItem>
          <MenuItem value={'A'}>La    A</MenuItem>
          <MenuItem value={'B'}>Si    B</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default ParameterPannel
