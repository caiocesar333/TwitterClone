function validateLogin() {
    var form = document.querySelector("#form-login");
    var username = document.querySelector("#username-login");
    var password = document.querySelector("#password-login");

    if (localStorage.getItem("admin") === "admin") {
        window.location = "http://localhost:3000/";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault()


        var usuario = username.value;
        var senha = password.value;

        if (usuario === "admin" && senha === "admin") {
            localStorage.setItem(usuario, senha);
            window.location = "http://localhost:3000/";
        } else {
            localStorage.clear();
        }
    })


}

export default validateLogin