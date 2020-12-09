import { getOfficers } from './officers/OfficerProvider.js'
import { criminalsList } from './criminals/criminalsList.js'
import { convictionSelect } from './convictions/convictionSelect.js'
import { NoteForm } from './notes/notesForm.js'
import { ShowNoteButton } from './notes/showNotesButton.js'
import "./notes/notesList.js"
import { officerSelect } from './officers/OfficerSelect.js'

getOfficers()
criminalsList()
convictionSelect()
NoteForm()
ShowNoteButton()
officerSelect()