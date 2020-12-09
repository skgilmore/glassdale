import { getNotes, useNotes } from "./notesProvider.js";
import { NoteHTMLConverter } from "./notes.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", () => {

    NoteList()
})
eventHub.addEventListener("saveNotes", () => {
    NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map( (note) => NoteHTMLConverter (note) ).join("")
    
        // convert the notes objects to HTML with NoteHTMLConverter

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}