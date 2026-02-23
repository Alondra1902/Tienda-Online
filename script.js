const regForm = document.getElementById("formRegistro");
const regBtn = document.getElementById("btnRegistro");
const termsCheck = document.getElementById("terminos");

if (termsCheck) {
    termsCheck.addEventListener("change", () => {
        regBtn.disabled = !termsCheck.checked;
    });
}

if (regForm) {
    regForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Las validaciones de min/max y email se activan por HTML5 antes de esto
        const msg = document.getElementById("mensaje");
        msg.innerHTML = "✅ ¡Bienvenido a la red! Acceso concedido.";
        msg.style.color = "#10b981";
        regForm.reset();
        regBtn.disabled = true;
    });
}