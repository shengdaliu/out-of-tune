import React, { useState, useEffect } from 'react'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { Tonal, Scale, Progression, Mode, Chord, Key } from '@tonaljs/modules'

// import MidiWriter from 'midi-writer-js'
// import MidiPlayer from 'midi-player-js'

import { Synth, PolySynth } from 'tone'

// // create a synth and connect it to the master output (your speakers)
const synth = new Synth().toMaster()

// a 4 voice Synth
const polySynth = new PolySynth(Synth).toDestination()

function BaseNotes (props) {
  function handlePlayNote (note, duration) {
    console.log(`This note ${note} is played for ${duration}.`)
    synth.triggerAttackRelease(note, duration)
  }

  return (
    <div className={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <React.Fragment>
            <Grid item xs={3}>
              <Paper style={{
                textAlign: 'center',
                color: 'grey',
                padding: '20px'
              }} onClick={() => { handlePlayNote("C4", "8n") }}>Note C4 8n</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{
                textAlign: 'center',
                color: 'grey',
                padding: '20px'
              }} onClick={() => { handlePlayNote("D4", "8n") }}>Note D4 8n</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{
                textAlign: 'center',
                color: 'grey',
                padding: '20px'
              }} onClick={() => { handlePlayNote("E4", "8n") }}>Note E4 8n</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{
                textAlign: 'center',
                color: 'grey',
                padding: '20px'
              }} onClick={() => { handlePlayNote("F4", "8n") }}>Note F4 8n</Paper>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <React.Fragment>
            <Grid item xs={3}>
              <Paper style={{
                textAlign: 'center',
                color: 'grey',
                padding: '20px'
              }} onClick={() => { handlePlayNote("G4", "8n") }}>Note G4 8n</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{
                textAlign: 'center',
                color: 'grey',
                padding: '20px'
              }} onClick={() => { handlePlayNote("A4", "8n") }}>Note A4 8n</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{
                textAlign: 'center',
                color: 'grey',
                padding: '20px'
              }} onClick={() => { handlePlayNote("B4", "8n") }}>Note B4 8n</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{
                textAlign: 'center',
                color: 'grey',
                padding: '20px'
              }} onClick={() => { handlePlayNote("C5", "8n") }}>Note C5 8n</Paper>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  )
}

export default BaseNotes
