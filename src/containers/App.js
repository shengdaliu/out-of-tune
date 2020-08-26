import React, { useState } from 'react'

import ParameterPannel from '../components/ParameterPannel'
import ChordTable from '../components/ChordTable'
import ScaleNotes from '../components/ScaleNotes'
import BaseNotes from '../components/BaseNotes'

function App () {
  const [keySignature, setKeySignature] = useState('C')
  const [progression, setProgression] = useState('VIm - IV - I - V')

  function handleKeyChangeEvent (e) {
    setKeySignature(e.target.value)
  }

  function handleProgressionChangeEvent (e) {
    setProgression(e.target.value)
  }

  console.log('Key in App')
  console.log(keySignature)

  console.log('Progression in App')
  console.log(progression)

  return (
    <div className='py2 px4 mx4 flex flex-row'>
      <div className='py1 px2 flex flex-column'>
        <h2>Choose your Key</h2>
        <ParameterPannel keySignature={keySignature}
          handleKeyChangeEvent={handleKeyChangeEvent}
          progression={progression}
          handleProgressionChangeEvent={handleProgressionChangeEvent}
        />
      </div>
      <div className='py1 px2 flex flex-column'>
        <h2>Basic 4 Chords Progressions {progression}</h2>
        <ChordTable keySignature={keySignature} progression={progression.split(' - ')}/>
        <h2>Major Scale Notes</h2>
        <ScaleNotes keySignature={keySignature} scaleName={'major'}/>
        <h2>Minor Scale Notes</h2>
        <ScaleNotes keySignature={keySignature} scaleName={'minor'}/>
        <h2>Basic C Major Scale Notes</h2>
        <BaseNotes/>
      </div>
    </div>
  )
}

export default App
