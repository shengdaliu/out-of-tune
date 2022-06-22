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

function ParameterPannel(props) {
  return (
    <div className="flex flex-column">
      <Grid container spacing={1} direction={'column'}>
        <Grid container item xs={12} spacing={3} direction={'column'}>
          <React.Fragment>
            <Grid item xs={3}>
              <FormControl variant="outlined" style={{ width: '120px', padding: '10px' }}>
                <InputLabel id="select-outlined-label">Key</InputLabel>
                <Select
                  labelId="select-outlined-label"
                  id="select-outlined"
                  value={props.keySignature}
                  onChange={props.handleKeyChangeEvent}
                >
                  <MenuItem value={'C'}>C Do </MenuItem>
                  <MenuItem value={'D'}>D Re </MenuItem>
                  <MenuItem value={'E'}>E Mi </MenuItem>
                  <MenuItem value={'F'}>F Fa </MenuItem>
                  <MenuItem value={'G'}>G Sol</MenuItem>
                  <MenuItem value={'A'}>A La </MenuItem>
                  <MenuItem value={'B'}>B Si </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" style={{ width: '250px', padding: '10px' }}>
                <InputLabel id="select-outlined-label">Chord Progression</InputLabel>
                <Select
                  labelId="select-outlined-label"
                  id="select-outlined"
                  value={props.progression}
                  onChange={props.handleProgressionChangeEvent}
                >
                  <MenuItem value={'I - IV - V'}>I - IV - V</MenuItem>
                  <MenuItem value={'I - V - VIm - IV'}>I – V – vi – IV (Optimistic)</MenuItem>
                  <MenuItem value={'V - VIm - IV - I'}>V – vi – IV – I</MenuItem>
                  <MenuItem value={'VIm - IV - I - V'}>vi – IV - I – V (Pessimistic)</MenuItem>
                  <MenuItem value={'IV - I - V - VIm'}>IV - I – V - vi</MenuItem>
                  <MenuItem value={'IV - V - IIIm - VIm'}>IV - V - iii - vi (J-Pop/Rock)</MenuItem>
                  <MenuItem value={'I - VIm - IV - V'}>I – vi – IV – V ('50s)</MenuItem>
                  <MenuItem value={'Im - VII - VI - V'}>i - VII - VI - V (Andalusian)</MenuItem>
                  <MenuItem value={'IIm - V - I'}>ii – V – I</MenuItem>
                  <MenuItem value={'I - V - VIm - IIIm - IV - I - IV - V'}>
                    I – V – vi – iii – IV – I – IV – V
                  </MenuItem>
                  <MenuItem value={'I7 - VI7 - V7'}>I7 - VI7 - V7</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  )
}

export default ParameterPannel
