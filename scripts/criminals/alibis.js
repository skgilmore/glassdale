import { useCrimes } from "../convictions/convictionsProvider.js";
import { useCriminals } from"./criminalsProvider.js"

const contentAlibis = document.querySelector(".dialog-container");
const eventHub = document.querySelector(".container")

eventHub.addEventListener('associatesChosen', evt => {
    const criminalId= evt.detail.criminalId;
    const criminals = useCriminals();
    const chosenCriminal = criminals.find( criminal => criminal.id ===criminalId);

    openDialog(chosenCriminal.known_associates);

}
)
eventHub.addEventListener('click', evt => {
    if (evt.target.id === 'close-associate-dialog' ||
      evt.target.classList.contains('associate-dialog')) {
      closeDialog();
    }
  })

  const closeDialog = () => {
    const container = document.querySelector('.dialog-container');
    container.innerHTML = "";
};
//   why does the close dialog need a container to go to?

const openDialog = (associates) => {
    const container = document.querySelector('.dialog-container');
    container.innerHTML = AssociateDialog(associates);
};
const AssociateDialog = (associates) => {
    return `
    <section class="associate-dialog">
        <div class="associate-dialog__body">
        <h1>Known Associates</h1>
        <div class="associate-dialog__list">
            ${associates.map(ass => AssociateCard(ass)).join("")}
        </div>
            <button id="close-associate-dialog">Close</button>
        </div>
    </section>
    `;
};
  
const AssociateCard = (associate) => {
    return `
    <div class="associate-dialog__card">
        <div class="associate-dialog__name"> ${associate.name} </div>
        <div class="associate-dialog__alibi"> ${associate.alibi} </div>
    </div>
    `;
};