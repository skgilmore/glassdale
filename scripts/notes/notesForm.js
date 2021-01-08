import { saveNote} from "./notesProvider.js"
import { getCriminals, useCriminals } from "../criminals/criminalsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget= document.querySelector(".noteFormContainer")



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "saveNote") {

        const criminalId= parseInt(document.querySelector("#suspect").value)
        const author =document.querySelector("#author").value
        // const timeStamp= document.querySelector("timeStamp").value
        const text = document.querySelector("#text").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            timeStamp: Date.now(),
            text,
            author,
            criminalId
            
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    const criminalsCollection = useCriminals()
    
    contentTarget.innerHTML = `
        <input type="text" id="author" placeholder="Your Name">
        <textarea id="text" placeholder="Write Your Note Here"></textarea>

        <select class="dropdown" id="suspect">
            <option value="0">Please select a suspect...</option>
            ${
                criminalsCollection.map(
                (criminal) => `
                    <option value=${criminal.id}>
                    ${criminal.name}
                    </option>
                `)
            }
        </select>


        <button id="saveNote">Save Note</button>
    `
}
export const NoteForm = () => {
    getCriminals()
    .then( () => render())
}


