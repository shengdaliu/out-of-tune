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

    <div className={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
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
                  {/* https://en.wikipedia.org/wiki/List_of_chord_progressions */}
                  <MenuItem value={'I - IV - V'}>The Popular Kid: I - IV - V</MenuItem>
                  <MenuItem value={'I - V - VIm - IV'}>The Sensitive One: I – V – vi – IV</MenuItem>
                  <MenuItem value={'VIm - IV - I - V'}>The Sensitive Two: vi – IV - I – V</MenuItem>
                  <MenuItem value={'IIm - V - I'}>The Jazz Cat: ii – V – I</MenuItem>
                  <MenuItem value={'I - V - VIm - iii - IV - I - IV - V'}>The Canon: I – V – vi – iii – IV – I – IV – V</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  )
}

export default ParameterPannel
