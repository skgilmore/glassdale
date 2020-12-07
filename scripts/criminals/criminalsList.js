import { criminals } from "./criminals.js"
import { getCriminals, useCriminals } from "./criminalsProvider.js"
import {  useCrimes } from "../convictions/convictionsProvider.js"

const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")



// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
    // // 
    //       Filter the criminals application state down to the people that committed the crime
    //   */
      const crimes = useCrimes()
      const crime = crimes.find(  (crime) => crime.id ===parseInt(event.detail.crimeThatWasChosen)   )
       
      const criminal = useCriminals()
      const matchingCriminals =  criminal.filter( (criminals) => criminals.conviction === crime.name     )

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



                                    