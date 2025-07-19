document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('button[type="submit"]');

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Detiene la redirección inicial

        // Redirigir directamente a payment.html
        window.location.href = "payment.html";
    });
});
