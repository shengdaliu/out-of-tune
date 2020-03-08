import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { Tonal, Scale, Progression, Mode, Chord, Key } from '@tonaljs/modules'

// import MidiWriter from 'midi-writer-js'
// import MidiPlayer from 'midi-player-js'

import Tone from 'tone'

// // create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster()

// pass in some initial values for the filter and filter envelope
// const synth = new Tone.Synth({
//   oscillator: {
//     type: "pwm",
//     modulationFrequency: 0.2
//   },
//   envelope: {
//     attack: 0.02,
//     decay: 0.1,
//     sustain: 0.2,
//     release: 0.9
//   }
// }).toMaster()

// a 4 voice Synth
const polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster()

function ChordTable (props) {
  const [track, setTrack] = useState([])

  useEffect(() => {
    const chords = Progression.fromRomanNumerals(props.keySignature, props.progression)
    const calibratedChords = []
    chords.forEach(chord => {
      calibratedChords.push({
        chord: chord,
        notes: Chord.chord(chord).notes.map(x => x + '4')
      })
    })

    setTrack(calibratedChords)
  }, [props.keySignature, props.progression])

  function handlePlayChord (chord, duration) {
    const chordNotes = Chord.chord(chord).notes.map(x => x + '4')
    console.log(`This chord ${chord} with notes ${chordNotes} is played for ${duration}.`)
    polySynth.triggerAttackRelease(chordNotes, duration)
  }

  var chordProgressionRow = []
  for (let i = 0; i < track.length; i++) {
    chordProgressionRow.push(
      <Grid key={i} item xs={12 / track.length}>
        <Paper key={i} style={{
          textAlign: 'center',
          color: 'grey',
          padding: '20px'
        }} onClick={() => { handlePlayChord(track[i].chord, "2n") }}>Chord { track[i].chord } 2n</Paper>
      </Grid>
    )
  }

  return (
    <div>
      <div className={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <React.Fragment>
              {chordProgressionRow}
            </React.Fragment>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ChordTable
