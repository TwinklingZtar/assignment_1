const darkThemeButton = document.querySelector(".darktheme");
const documentBody = document.body
const documentAside = document.querySelector("aside")
const textArea = document.querySelector("textarea")
const newnoteButton = document.querySelector(".new_note_button")
const saveButton = document.querySelector(".save_button")
const cancelButton = document.querySelector(".cancel_button")
const aTags = document.querySelectorAll("a")
const noteList = document.querySelector(".note_list")

let notesArray = [{title:"note one", body:"this is my first note"}]




darkThemeButton.addEventListener("click", activateDarkMode)
function activateDarkMode() {
    
    documentBody.classList.toggle("bodyDarkTheme")
    documentAside.classList.toggle("asideDarkTheme")
    textArea.classList.toggle("textAreaDarkTheme")
    darkThemeButton.classList.toggle("darkthemeDarkTheme")
    newnoteButton.classList.toggle("newnotebuttonDarkTheme")
    saveButton.classList.toggle("savebuttonDarkTheme")
    cancelButton.classList.toggle("cancelbuttonDarkTheme")
    aTags[0].classList.toggle('atagsDarkTheme')
    aTags[1].classList.toggle('atagsDarkTheme')

    if (darkThemeButton.textContent === "Light Theme") {
        darkThemeButton.textContent = "Dark Theme"
    } else {
        darkThemeButton.textContent = "Light Theme"
    }
    







};
cancelButton.addEventListener("click", hideTheStuff)
function hideTheStuff() {
    cancelButton.setAttribute("hidden", "hidden");
    textArea.setAttribute("hidden", "hidden");
    saveButton.setAttribute("hidden", "hidden");
};







newnoteButton.addEventListener("click", createNewNote) 
function createNewNote() {
    cancelButton.removeAttribute("hidden")
    saveButton.removeAttribute("hidden")
    textArea.removeAttribute("hidden")
    textArea.value = ""
}






saveButton.addEventListener("click", saveNote)
function saveNote() {
    let noteName = prompt("What would you like to call this note?")
    notesArray.push({title: noteName, body: textArea.value})
    console.log(notesArray)
    let newListItem = document.createElement("li")
    let newContent = document.createTextNode(noteName)
    newListItem.appendChild(newContent)
    noteList.appendChild(newListItem)

}

