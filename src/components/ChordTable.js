import React, { useState, useEffect } from 'react'

// import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

// import { Tonal, Scale, Progression, Mode, Chord, Key } from '@tonaljs/modules'
import { Progression, Chord } from '@tonaljs/modules'

// import MidiWriter from 'midi-writer-js'
// import MidiPlayer from 'midi-player-js'

import { Synth, PolySynth, Part, Transport } from 'tone'

// // create a synth and connect it to the master output (your speakers)
const synth = new Synth().toMaster()

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
const polySynth = new PolySynth(Synth).toDestination()

function ChordTable(props) {
  const [track, setTrack] = useState([])

  useEffect(() => {
    const chords = Progression.fromRomanNumerals(props.keySignature, props.progression)
    const calibratedChords = []
    chords.forEach((chord) => {
      calibratedChords.push({
        chord: chord,
        notes: Chord.chord(chord).notes.map((x) => x + '4'),
      })
    })

    setTrack(calibratedChords)
  }, [props.keySignature, props.progression])

  function handlePlayChord(chord, duration) {
    const chordNotes = Chord.chord(chord).notes.map((x) => x + '4')
    console.log(`This chord ${chord} with notes ${chordNotes} is played for ${duration}.`)
    return polySynth.triggerAttackRelease(chordNotes, duration)
  }

  function handlePlayChordInLoop(track, duration) {
    // pass in an array of events
    // var part = new Tone.Part(function (time, event) {
    //   // the events will be given to the callback with the time they occur
    //   // synth.triggerAttackRelease(event.note, event.dur, time)
    //   polySynth.triggerAttackRelease(event.chordNotes, event.duration, time)
    // }, [
    //   { time: 0, chordNotes: 'C4', duration: '4n' },
    //   { time: { '4n': 1, '8n': 1 }, chordNotes: 'E4', duration: '8n' },
    //   { time: '2n', chordNotes: 'G4', duration: '16n' },
    //   { time: { '2n': 1, '8t': 1 }, chordNotes: 'B4', duration: '4n' }
    // ])

    var part = new Part(
      function (time, event) {
        // the events will be given to the callback with the time they occur
        // synth.triggerAttackRelease(event.note, event.dur, time)
        polySynth.triggerAttackRelease(event.chordNotes, event.duration, time)
      },
      [
        { time: 0, chordNotes: track[0].chord, duration: '8n' },
        {
          time: { '4n': 1, '8n': 1 },
          chordNotes: track[1].chord,
          duration: '8n',
        },
        { time: '2n', chordNotes: track[2].chord, duration: '8n' },
        {
          time: { '2n': 1, '8t': 1 },
          chordNotes: track[3].chord,
          duration: '8n',
        },
      ],
    )

    console.log(track)

    // start the part at the beginning of the Transport's timeline
    part.start(0)

    // loop the part 3 times
    part.loop = 5
    part.loopEnd = duration
    // const chordNotes = Chord.chord(chord).notes.map(x => x + '4')
    // console.log(`This chord ${chord} with notes ${chordNotes} is played for ${duration}.`)
    // polySynth.triggerAttackRelease(chordNotes, duration)
  }

  var chordProgressionRow = []
  for (let i = 0; i < track.length; i++) {
    chordProgressionRow.push(
      <Grid key={i} item xs={12 / track.length}>
        <Paper
          key={i}
          style={{
            textAlign: 'center',
            color: 'grey',
            padding: '20px',
          }}
          onClick={() => {
            handlePlayChord(track[i].chord, '2n')
          }}
        >
          Chord {track[i].chord} 2n
        </Paper>
      </Grid>,
    )
  }

  return (
    <div>
      <div className={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <React.Fragment>{chordProgressionRow}</React.Fragment>
          </Grid>
          {/* <Grid container item xs={12} spacing={3}>
            <React.Fragment>
              <Grid item xs={12 / track.length}>
                <Paper style={{
                  textAlign: 'center',
                  color: 'grey',
                  padding: '20px'
                }} onClick={() => { handlePlayChordInLoop(track, "1m") }}>Play in Loop</Paper>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={12 / track.length}>
                <Paper style={{
                  textAlign: 'center',
                  color: 'grey',
                  padding: '20px'
                }} onClick={() => { Transport.toggle() }}>Play in Loop</Paper>
              </Grid>
            </React.Fragment>
          </Grid> */}
        </Grid>
      </div>
    </div>
  )
}

export default ChordTable
