import { getConvictions, useCrimes } from "./convictionsProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/

const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container") 

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

 // Only do this if the `crimeSelect` element was changed
 if (event.target.id === "crimeSelect") {
    // Create custom event. Provide an appropriate name.
    const customEvent = new CustomEvent("crimeChosen", {
        detail: {
            crimeThatWasChosen: event.target.value
        }
    })

    // Dispatch to event hub
    eventHub.dispatchEvent(customEvent)
}
})



export const convictionSelect = () => {
  getConvictions()
  .then( () => {
      const convictions = useCrimes()
      render(convictions)
  
  })

}
     const render = convictionsCollection => {
       
    //    the const render == is what you are mapping! therefor thats the.mapname!

contentTarget.innerHTML = `
<select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
        ${
            convictionsCollection.map((crime) => ` 
              <option value=${crime.id}>
               ${crime.name}
              </option>
              `)
        }
        </select>
    `
     }