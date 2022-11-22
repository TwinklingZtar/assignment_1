const darkThemeButton = document.querySelector(".darktheme");
const documentBody = document.querySelector("body")
const documentAside = document.querySelector("aside")
const textArea = document.querySelector("textarea")
const newNoteButton = document.querySelector(".new_note_button")
const saveButton = document.querySelector(".save_button")
const cancelButton = document.querySelector(".cancel_button")



darkThemeButton.addEventListener("click", activateDarkMode)
function activateDarkMode() {
    
    documentBody.classList.toggle("bodyDarkTheme")
    documentAside.classList.toggle("asideDarkTheme")
    textArea.classList.toggle("textAreaDarkTheme")
    darkThemeButton.classList.toggle("darkthemeDarkTheme")
    newNoteButton.classList.toggle("newnotebuttonDarkTheme")
    saveButton.classList.toggle("savebuttonDarkTheme")
    cancelButton.classList.toggle("cancelbuttonDarkTheme")

    if (darkThemeButton.textContent === "Light Theme") {
        darkThemeButton.textContent = "Dark Theme"
    } else {
        darkThemeButton.textContent = "Light Theme"
    }
    
};
cancelButton.attributes.removeNamedItem("hidden")
cancelButton.addEventListener("click", hidethestuff)
function hidethestuff() {
    cancelButton.setAttribute("hidden", "hidden");
    textArea.setAttribute("hidden", "hidden");
    saveButton.setAttribute("hidden", "hidden");
};
