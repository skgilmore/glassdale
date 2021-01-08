const eventHub = document.querySelector('.container')

eventHub.addEventListener('click', evt => {
    if (!evt.target.id.startsWith('associates--')) {
    return;
    }

    const idParts = evt.target.id.split('--');
    const criminalId = parseInt(idParts[1]);
  
    eventHub.dispatchEvent(new CustomEvent('associatesChosen', {
      detail: { criminalId }
    }));
  });

// the !evt means if value is equal to false


export const criminals = (criminalsObject, facilities) => {
    return `
    <section class="criminals data">
    <h2 class="criminals__name">${criminalsObject.name}</h2>
    <div class="criminals__age">Age: ${criminalsObject.age}</div>
    <div class="criminals__conviction">Crime: ${criminalsObject.conviction}</div>
    <div class="criminals__incarcerationStart">Incarcerated" ${new Date(criminalsObject.incarceration.start).toLocaleDateString('en-US')}</div>
    <div class="criminals__incarcerationEnd">Released: ${new Date(criminalsObject.incarceration.end).toLocaleDateString('en-US')}</div>
    <div>
    <div class"button-container">
    <button id="associates--${criminalsObject.id}">Associate Alibis</button>
    </div>
    <h2>Facilities</h2>
    <ul>
        ${facilities.map(forEachObject => `<li>${forEachObject.facilityName}</li>`).join("")}
    </ul>
</div>
    </section>
    
    `
}



