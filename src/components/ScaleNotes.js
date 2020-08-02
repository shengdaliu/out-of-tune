import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { Tonal, Scale, Progression, Mode, Chord, Key } from '@tonaljs/modules'

import { Synth, PolySynth } from 'tone'

// // create a synth and connect it to the master output (your speakers)
const synth = new Synth().toMaster()

// a 4 voice Synth
const polySynth = new PolySynth(4, Synth).toMaster()

function ScaleNotes (props) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = Scale.scale(`${props.keySignature}4 ${props.scaleName}`).notes
    setNotes(notes)
  }, [props.keySignature])

  function handlePlayNote (note, duration) {
    console.log(`This note ${note} is played for ${duration}.`)
    synth.triggerAttackRelease(note, duration)
  }

  var notesRow = []
  for (let i = 0; i < notes.length; i++) {
    notesRow.push(
      <Grid key={i} item xs={12 / notes.length}>
        <Paper key={i} style={{
          textAlign: 'center',
          color: 'grey',
          padding: '20px'
        }} onClick={() => { handlePlayNote(notes[i], "8n") }}>Note { notes[i] } 8n</Paper>
      </Grid>
    )
  }

  return (
    <div>
      <div className={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <React.Fragment>
              {notesRow}
            </React.Fragment>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ScaleNotes
