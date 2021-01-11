export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__text">Note:${ noteObject.text }</div>
            <div class="note__suspect">Suspect: ${ noteObject.criminalsName }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__timestamp">Timestamp: ${ new Date(noteObject.timeStamp).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}