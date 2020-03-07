import React, { useState } from 'react'

import ParameterPannel from '../components/ParameterPannel'
import ChordTable from '../components/ChordTable'
import ScaleNotes from '../components/ScaleNotes'
import BaseNotes from '../components/BaseNotes'

function App () {
  const [keySignature, setKeySignature] = useState('C')

  function handleKeyChangeEvent (e) {
    setKeySignature(e.target.value)
  }

  console.log('App')
  console.log(keySignature)

  return (
    <div style={{ padding: '50px 50px 50px 50px' }}>
      <h2>Choose your Key</h2>
      <ParameterPannel handleKeyChangeEvent={handleKeyChangeEvent} keySignature={keySignature}/>
      <h2>Basic 4 Chords Progressions vi IV I V</h2>
      <ChordTable keySignature={keySignature} progression={['VIm', 'IV', 'I', 'V']}/>
      <h2>Major Scale Notes</h2>
      <ScaleNotes keySignature={keySignature} scaleName={'major'}/>
      <h2>Minor Scale Notes</h2>
      <ScaleNotes keySignature={keySignature} scaleName={'minor'}/>
      <h2>Basic C Major Scale Notes</h2>
      <BaseNotes/>
    </div>
  )
}

export default App
