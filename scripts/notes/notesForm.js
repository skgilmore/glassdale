import { saveNote} from "./notesProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget= document.querySelector(".noteFormContainer")



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "saveNote") {

        const suspect = document.querySelector("#suspect").value
        const author =document.querySelector("#author").value
        // const timeStamp= document.querySelector("timeStamp").value
        const text = document.querySelector("#text").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            timeStamp: Date.now(),
            text: text,
            author: author,
            suspect: suspect,
            
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="author" placeholder="Your Name">
        <textarea id="text" placeholder="Write Your Note Here"></textarea>
        <input type="text" id="suspect" placeholder="Suspects">
        <button id="saveNote">Save Note</button>
    `
}
export const NoteForm = () => {
    render()
}
