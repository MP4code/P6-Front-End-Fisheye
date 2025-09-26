const modal = document.getElementById("contact_modal");
const openBtn = document.querySelector(".photograph-header .contact_button");
const closeBtn = modal.querySelector("img"); 


openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }   
});

// Gestion du formulaire
const form = modal.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const first_name = document.getElementById("first_name");
    const last_name = document.getElementById ("last_name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    console.log("Prénom: "+first_name.value, "Nom: "+last_name.value, "e-mail: "+email.value, "message: "+message.value);
}
); 
