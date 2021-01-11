const contentTarget = document.querySelector(".witnessListButton")
const eventHub = document.querySelector(".container")



// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "showWitness") {
//         const witnessEvent = new CustomEvent("showWitnessClicked")
//         eventHub.dispatchEvent(witnessEvent)
//     }
// })

export const ShowWitnessButton = () => {
    contentTarget.innerHTML +=  "<button id='button--showWitness'>View Witnesses</button>"

}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === ("button--showWitness")) {
        const witnessListGenerateEvent = new CustomEvent("witnessListGenerate");
        eventHub.dispatchEvent(witnessListGenerateEvent);

        // const disableAffordanceEvent = new CustomEvent("disableAffordanceEvent");
        // eventHub.dispatchEvent(disableAffordanceEvent);
    }
})