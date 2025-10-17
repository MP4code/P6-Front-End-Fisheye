export function displayModal() {
    const modal = document.getElementById("contact_modal");
    if (modal) modal.style.display = "block";
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    if (modal) modal.style.display = "none";
}

export function setupModal() {
    const modal = document.getElementById("contact_modal");
    if (!modal) return;

    const closeButton = modal.querySelector(".close-button");
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });
}



// Gestion du formulaire
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const first_name = document.getElementById("first_name");
    const last_name = document.getElementById ("last_name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    console.log("Prénom: "+first_name.value, "Nom: "+last_name.value, "e-mail: "+email.value, "message: "+message.value);
}
); 
