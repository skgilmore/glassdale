import {getOfficers, useOfficers} from "./OfficerProvider.js"

const officersElement = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("changeOfficer", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const officerThatWasChosen = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(officerThatWasChosen)
    }
})
export const officerSelect = () => {
    getOfficers()
    .then( () => {
        const officersPick = useOfficers()
        render(officersPick)
    
    })
  
  }
       const render = officersCollection => {
  
  officersElement.innerHTML = `
  <select class="dropdown" id="officerelect">
      <option value="0">Arresting Officer...</option>
          ${
              officersCollection.map((officer) => ` 
                <option value=${officer.id}>
                 ${officer.name}
                </option>
                `)
          }
          </select>
      `
       }