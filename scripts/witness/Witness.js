/*
 *  Witness module with exports the function, witness, which returns a string of HTML to form 
 *  witness card elements when looped through an array of witness objects. 
*/
export const Witness = (witnessObject) => {
    const [firstName, lastName] = witnessObject.name.split(" ");
    return `
    <div id="witness--${witnessObject.id}" class="witness">
        <h4 id="witness__${witnessObject.name}"><span class="bold">Name</span>: ${lastName}, ${firstName}</h4>
        <p><span class="bold">Statements</span>: ${witnessObject.statements}</p>
    </div>
    `
}


// a button that toggles Show witness statements
// displays witness name and what they saw
// // Which components do you need to create for this feature?
// Where is the data coming from in the API? Do you need a new provider?
//   Need a witness provider file
// Which component is "talking" (i.e. dispatches a custom event) when a user performs an action?
//    criminal list is listening for custom event since that is where we want to toggle from, wit. stat. is html rep file
// Which component would listen and react to that custom event?
// Does data need to be send along with the message?
// Which DOM element would contain the list of witness statements? Do you need a new one, or can they go in an existing one?