let criminals= []



export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}

// Which components do you need to create for this feature?
//  " criminal list, criminals, criminals provider"
// Where is the data coming from in the API? Do you need a new provider?
// known_associates": [
//     {
//       "name": "Ebony Hyatt",
//       "alibi": "getting married"
//     }
// Which component should dispatch a custom event when the user clicks on the alibi button?
//   "show known associaties name and alibi"
// Which component should react to that custom event?
// Does data need to be send along with the event?
// Which DOM element would contain the list of alibis?
//  Do you need a new one, or can they go in an existing one?
// The name of the known associate
// The alibi that the known associate is providing for the criminal 
// to try to prove the criminals' innocence.