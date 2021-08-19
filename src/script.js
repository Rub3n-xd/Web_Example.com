let switcher = document.getElementById("switch")
let content = document.getElementById("content")
let icon = document.getElementById("iconchange")
let word = document.getElementById("spanchange")

switcher.onclick = function() {
    if (!content.classList.contains("white")) {
        content.classList.add("white")
        icon.className = "bx bxs-moon"
        word.textContent = "Oscuridad"
    } else {
        content.classList.remove("white")
        icon.className = "bx bxs-sun"
        word.textContent = "Luz"
    }
};
