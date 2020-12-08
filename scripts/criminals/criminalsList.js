import { criminals } from "./criminals.js"
import { getCriminals, useCriminals } from "./criminalsProvider.js"
import {  useCrimes } from "../convictions/convictionsProvider.js"

const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")



// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
      // crimeThatwasChosen and crimeChosen must match what you called the event
    // // 
    //       Filter the criminals application state down to the people that committed the crime
    //   */
    
      const crimes = useCrimes()
      // crimes is what you are filtering thru on next line to find a matching property of .id
      const crime = crimes.find(  (C) => C.id ===parseInt(event.detail.crimeThatWasChosen)   )
      // above this you are calling the parameter c this can be anything but must match the pairing before id
      // parseInt is a built in function that returns a number that is in a string instead of "number"
       
      const criminal = useCriminals()
      const matchingCriminals =  criminal.filter( (criminals) => criminals.conviction === crime.name     )
          // the conviction and name properties must be associated with exisitng propertys of given object
      render(matchingCriminals)
  }
        
      /*
          Then invoke render() and pass the filtered collection as
          an argument
      */  
    
    
  }
)


// Render ALL criminals initally
export const criminalsList = () => {
  getCriminals()
      .then( () => {
          let  perps = useCriminals()
          render(perps)
      })
    }

    const render = (criminal) => {
      let criminalCards = []
      for (const perp of criminal) {
        criminalCards.push(criminals(perp))
      }
      criminalElement.innerHTML = criminalCards.join("") 
    }



                                    