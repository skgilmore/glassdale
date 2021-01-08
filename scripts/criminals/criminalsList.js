import { criminals } from "./criminals.js"
import { getCriminals, useCriminals } from "./criminalsProvider.js"
import {  useCrimes } from "../convictions/convictionsProvider.js"
import { useOfficers, getOfficers} from "../officers/OfficerProvider.js"
import { useCriminalFacilities, getCriminalFacilities } from "../facility/criminalFacility.js"
import { getFacilities,useFacilities } from "../facility/facilityProvider.js"


const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")
const officerElement = document.querySelector(".officersContainer")

eventHub.addEventListener('officerSelect', event => {
  if(event.detail.officer !== "0") {
    const allofficers = useOfficers()
    const officerFilter = allofficers.find (  (o) => o.id ===parseInt(event.detail.officer) )
    const criminals = useCriminals ()
    const filterCriminals = criminals.filter(
      criminalObject => {
        if (criminalObject.arrestingOfficer  === officerFilter.name) {
          
       
          return criminalObject
          
        
        }
      }
    )
    render(filterCriminals)
    
  }
}
)

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
let perps = []
let crimFac = []
let facilities= []

// Render ALL criminals initally this runs the render for both events. dont need to have seperate renders
export const criminalsList = () => {
  getCriminals()
      .then(getCriminalFacilities)
      .then(getFacilities)
      .then( 
        () => {
          perps = useCriminals()
          facilities = useFacilities()
          crimFac = useCriminalFacilities()
          render(perps) 
          // does this work if render param is blank?
      })
    }

    // let render = (criminal) => {
    //   let criminalCards = []
    //   for (const perp of criminal) {
    //     criminalCards.push(criminals(perp))
    //   }
    //   criminalElement.innerHTML = criminalCards.join("") 
    // }

    
  
    const render = (criminalList) => {
      // Step 1 - Iterate all criminals
      
      criminalElement.innerHTML = criminalList.map(
          (criminalObject) => {
              // Step 2 - Filter all relationships to get only ones for this criminal
              const facilityRelationshipsForThisCriminal = crimFac.filter(cf => cf.criminalId === criminalObject.id)
  
              // Step 3 - Convert the relationships to facilities with map()
              const facilitiesMap = facilityRelationshipsForThisCriminal.map(cf => {
                  const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
                  return matchingFacilityObject
              })
  
              // Must pass the matching facilities to the Criminal component
              return criminals(criminalObject, facilitiesMap)
          }
      ).join("")
  }