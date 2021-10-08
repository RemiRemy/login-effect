let carte = document.querySelector(".carte")
let log = document.querySelector(".btnLeft")
let reg = document.querySelector(".btnRight")
let btn = document.querySelector(".btnSwitch")

reg.addEventListener("click" , (e) => {
    e.preventDefault() //stop le comportement du navigateur ici arrête de traiter les liens
    carte.style.transform = "translateX(-400px)"
    btn.classList.add("registerbtn")
})

log.addEventListener("click" , (e) => {
    e.preventDefault()
    carte.style.transform = "translateX(0px)"
    console.log(e);
    btn.classList.remove("registerbtn")
})