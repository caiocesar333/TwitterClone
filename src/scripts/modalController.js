function modalController(){
    const modal = document.querySelector("#modal")
    const overlay = document.querySelector("#overlay")

    modal.classList.remove("show");
    overlay.classList.remove("show");
}

export default modalController