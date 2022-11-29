const navOpenButton = document.querySelector("#nav-open");
const navCloseButton = document.querySelector("#nav-close");
const navElement = document.querySelector("nav");

navOpenButton.addEventListener("click", function(){
    // show nav
    navElement.classList.remove("hide");
})

navCloseButton.addEventListener("click", function(){
    // hide nav
    navElement.classList.add("hide");
})
