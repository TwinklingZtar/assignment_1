const darkThemeButton = document.querySelector(".darktheme");
const documentBody = document.querySelector("body")
const documentAside = document.querySelector("aside")
const textArea = document.querySelector("textarea")
const newnoteButton = document.querySelector(".new_note_button")
const saveButton = document.querySelector(".save_button")
const cancelButton = document.querySelector(".cancel_button")
const aTags = document.querySelectorAll("a")

console.log(aTags)

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


