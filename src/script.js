let switcher = document.getElementById("switch")
let contnt = document.getElementById("content")
let icon = document.getElementById("iconchange")
let word = document.getElementById("spanchange")

switcher.onclick = function() {
    if(!contnt.classList.contains("white"))
    {
        contnt.classList.add("white")
        icon.className = "bx bxs-moon"
        word.textContent = "Oscuridad"
    }
    else
    {
        contnt.classList.remove("white")
        icon.className = "bx bxs-sun"
        word.textContent = "Luz"
    }
};