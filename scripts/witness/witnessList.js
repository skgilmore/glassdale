import { useWitness, getWitness } from "./witnessProvider.js"
import { Witness } from "./Witness.js"


const eventHub = document.querySelector(".container");
const targetListContainerContentElement = document.querySelector(".listContainer");
// const contentTarget = document.querySelector(".witnessListButton")


let componentStateWitness = []

// get list of the single witnessObj to display on DOM

const render = () =>
{
    targetListContainerContentElement.innerHTML = componentStateWitness.map(
        witness => Witness(witness)).join ("");
    
}

// go get all the witness from the api and let me get the info and use it after
// the data has come back to us

const witnessList = () => {
    targetListContainerContentElement.innerHTML = "";
    getWitness()
    .then ( () => {
    componentStateWitness = useWitness();
    render()
})

}

// List for custom click event to show witness List

eventHub.addEventListener("witnessListGenerateEvent", e => {
    witnessList()
})