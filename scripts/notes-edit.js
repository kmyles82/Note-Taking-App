'use strict'

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const timestampEl = document.querySelector('#last-edited')

let note = notes.find((note) => note.id === noteId)

!note ? location.assign('index.html') : '';

titleElement.value = note.title
bodyElement.value = note.body
timestampEl.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    timestampEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
    // console.log(e.target.value)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    timestampEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
    // console.log(e.target.value)
})

// titleElement.appendChild(timestampEl)

removeButton.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => {
            return note.id === noteId
        })

        !note ? location.assign('index.html') : '';

        titleElement.value = note.title
        bodyElement.value = note.body
        timestampEl.textContent = generateLastEdited(note.updatedAt)
    }
    
})

