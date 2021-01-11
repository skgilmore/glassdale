import { getOfficers } from './officers/OfficerProvider.js'
import { criminalsList } from './criminals/criminalsList.js'
import { convictionSelect } from './convictions/convictionSelect.js'
import { NoteForm } from './notes/notesForm.js'
import { ShowNoteButton } from './notes/showNotesButton.js'
import "./notes/notesList.js"
import { officerSelect } from './officers/OfficerSelect.js'
import { ShowWitnessButton } from './witness/witnessButton.js'
import "./witness/witnessList.js"
import "./witness/Witness.js"

getOfficers()
criminalsList()
convictionSelect()
NoteForm()
ShowNoteButton()
officerSelect()
ShowWitnessButton()