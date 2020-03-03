const { Tonal, Scale, Progression, Mode, Chord, Key } = require('@tonaljs/modules')

const MidiWriter = require('midi-writer-js')
const MidiPlayer = require('midi-player-js')

const logger = require('./services/logger')

logger.info(Tonal.note("A4").midi) // => 60
logger.info(Tonal.note("a4").freq) // => 440
logger.info(Tonal.note("c#2").accidentals) // => '#'
logger.info(Tonal.note("x").midi) // => undefined
logger.info(Tonal.interval("5P").semitones) // => 7
logger.info(Tonal.transpose("C4", "5P")) // => "G4"
logger.info(Tonal.distance("C4", "G4")) // => "5P"

logger.info('%j', Scale.scale("C5 pentatonic"))
// =>
// {
//   empty: false,
//   name: "C5 pentatonic",
//   type: "major pentatonic",
//   tonic: "C5",
//   notes: ["C5", "D5", "E5", "G5", "A5"],
//   intervals: ["1P", "2M", "3M", "5P", "6M"],
//   aliases: ["pentatonic"],
//   setNum: 2708,
//   chroma: "101010010100",
//   normalized: "101010010100"
// }
logger.info('%j', Scale.scaleChords("pentatonic"))
// => ["5", "64", "M", "M6", "Madd9", "Msus2"]

logger.info('%j', Scale.extended("major"))
// => ["bebop", "bebop dominant", "bebop major", "chromatic", "ichikosucho"]

logger.info('%j', Scale.reduced("major"))
// => ["ionian pentatonic", "major pentatonic", "ritusen"]

logger.info('%j', Progression.fromRomanNumerals("C", ["IMaj7", "IIm7", "V7"]))
// => ["CMaj7", "Dm7", "G7"]
logger.info('%j', Progression.toRomanNumerals("C", ["CMaj7", "Dm7", "G7"]))
// => "IMaj7", "IIm7", "V7"]

logger.info('%j', Mode.mode("major"))
// {
//   name: "ionian",
//   aliases: ["major"]
//   intervals: ["1P", "2M", "3M", "4P", "5P", "6M", "7M"]
//   modeNum: 0,
//   mode: 2773,
//   alt: 0,
//   triad: "",
//   seventh: "Maj7",
// }

logger.info('%j', Mode.entries().map(mode => mode.name))
// => ["ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian"];

logger.info('%j', Chord.chord("Cmaj7"))
// =>
// {
//   name: "C major seventh",
//   tonic: "C",
//   setNum: 2193,
//   type: "major seventh",
//   aliases: ["maj7", "Δ", "ma7", "M7", "Maj7"],
//   chroma: "100010010001",
//   intervals: ["1P", "3M", "5P", "7M"],
//   notes: ["C", "E", "G", "B"],
//   quality: "Major"
// };

logger.info('%j', Chord.transpose("Eb7b9", "5P")) // => "Bb7b9"

logger.info('%j', Chord.chordScales("C7b9"))
// => ["phrygian dominant", "flamenco", "spanish heptatonic", "half-whole diminished", "chromatic"]

logger.info('%j', Chord.extended("Cmaj7"))
// => [ 'Cmaj#4', 'Cmaj7#9#11', 'Cmaj9', 'CM7add13', 'Cmaj13', 'Cmaj9#11', 'CM13#11', 'CM7b9' ]

logger.info('%j', Chord.reduced("Cmaj7")) // => ["C5", "CM"]


logger.info('%j', Key.minorKey('C')) // =>
/*
{
  tonic: "C",
  type: "minor",
  keySignature: "bbb",
  relativeMajor: "Eb",
  natural: {
    tonic: "C",
    grades: ["I", "II", "bIII", "IV", "V", "bVI", "bVII"],
    intervals: ["1P", "2M", "3m", "4P", "5P", "6m", "7m"],
    scale: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
    chords: ["Cm7", "Dm7b5", "Ebmaj7", "Fm7", "Gm7", "Abmaj7", "Bb7"],
    chordsHarmonicFunction: ["T", "SD", "T", "SD", "D", "SD", "SD"],
    chordScales: ["C minor", "D locrian", "Eb major", "F dorian", "G phrygian", "Ab lydian", "Bb mixolydian"],
  },
  harmonic: {
    tonic: "C",
    grades: ["I", "II", "bIII", "IV", "V", "bVI", "VII"],
    intervals: ["1P", "2M", "3m", "4P", "5P", "6m", "7M"],
    scale: ["C", "D", "Eb", "F", "G", "Ab", "B"],
    chords: ["Cmmaj7", "Dm7b5", "Eb+maj7", "Fm7", "G7", "Abmaj7", "Bmo7"],
    chordsHarmonicFunction: ["T", "SD", "T", "SD", "D", "SD", "D"],
    chordScales: ["C harmonic minor", "D locrian 6", "Eb ionian #5", "F dorian #11", "G phrygian dominant", "Ab lydian #2", "B super locrian bb7",
    ],

  },
  melodic: {
    tonic: "C",
    grades: ["I", "II", "bIII", "IV", "V", "VI", "VII"],
    intervals: ["1P", "2M", "3m", "4P", "5P", "6M", "7M"],
    scale: ["C", "D", "Eb", "F", "G", "A", "B"],
    chords: ["Cm6", "Dm7", "Eb+maj7", "F7", "G7", "Am7b5", "Bm7b5"],
    chordsHarmonicFunction: ["T", "SD", "T", "SD", "D", "-", "-"],
    chordScales: ["C melodic minor", "D Dorian b2", "Eb Lydian augmented", "F Lydian dominant", "G Mixolydian b6", "A locrian 9", "B altered",
    ],
  },
}
*/

// Start with a new track
var track = new MidiWriter.Track()

// Define an instrument (optional):
track.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 1}))

// Add some notes:
var note = new MidiWriter.NoteEvent({pitch: ['C4', 'D4', 'E4'], duration: '4'})
track.addEvent(note)

// Generate a data URI
var write = new MidiWriter.Writer(track)
var midiDataUri = write.dataUri()
write.saveMIDI('./test')

var midiFileData = write.buildFile()

// Initialize player and register event handler
var Player = new MidiPlayer.Player(function(event) {
	logger.info('%j', event)
})

// // Load a MIDI file
// Player.loadFile('./test.mid')
// Player.play()

// Load a MIDI file
Player.loadDataUri(midiDataUri)
Player.play()