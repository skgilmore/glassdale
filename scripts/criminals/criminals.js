export const criminals = (criminalsObject) => {
    return `
    <section class="criminals data">
    <h2 class="criminals__name">${criminalsObject.name}</h2>
    <div class="criminals__age">Age: ${criminalsObject.age}</div>
    <div class="criminals__conviction">Crime: ${criminalsObject.conviction}</div>
    <div class="criminals__incarcerationStart">Incarcerated" ${new Date(criminalsObject.incarceration.start).toLocaleDateString('en-US')}</div>
    <div class="criminals__incarcerationEnd">Released: ${new Date(criminalsObject.incarceration.end).toLocaleDateString('en-US')}</div>
    </section>
    
    `
}



