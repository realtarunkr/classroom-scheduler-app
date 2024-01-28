showNotes();
const title = document.querySelector("#title");
const textArea = document.querySelector("#note-text");
const button = document.querySelector(".note-btn");
button.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title: title.value,
        textArea: textArea.value
    }
})
