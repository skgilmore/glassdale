import { getNotes, useNotes } from "./notesProvider.js";
import { NoteHTMLConverter } from "./notes.js";
import { useCriminals } from "../criminals/criminalsProvider.js"

let visible = false
// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", () => {
    if (visible === false) {
    NoteList()
    visible = true
    
}
else {
    contentTarget.innerHTML= ""
    visible = false
}

})
eventHub.addEventListener("noteStateChanged", () => {
    // if (visible === true) {
    NoteList()
    // }
})
const render = (noteArray, criminals) => {
   
        // Find the related criminal
        
        const allNotesConvertedToStrings = noteArray.map( (note) => {
            const relatedCriminal = criminals.find(
                (criminal) => {
               return criminal.id === note.criminalId
            }
            )
                 note.criminalName = relatedCriminal.name

        
        return  NoteHTMLConverter (note)
         } ).join("")
    
        // convert the notes objects to HTML with NoteHTMLConverter

    contentTarget.innerHTML = allNotesConvertedToStrings
        }

//         return `
//             <section class="note">
//                 <h2>Note about ${relatedCriminal.name}</h2>
//                 ${note.noteText}
//             </section>
//         `
//     })
// }

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    let criminals = useCriminals()
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes,criminals)
        })
}