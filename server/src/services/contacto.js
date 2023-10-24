const { Resend } = require("resend");
const { CLAVE_RESEND } = process.env;
const resend = new Resend(CLAVE_RESEND);

const contactoLaburos = async (nombre, correo, empresa, mensaje) => {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["diegoduvan321@gmail.com"], // Cambia esto al correo de la empresa de servicios
      subject: `Consulta de laburos- ${empresa}`,
      html: `
    <html>
<head>
  <style>
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      color: #336699;
    }

    p {
      color: #333;
      margin-bottom: 20px;
    }

    .highlight {
      color: #ff6600;
      font-weight: bold;
    }

    .contact {
      color: #009900;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Mensaje de un Reclutador</h1>
    <p>Nombre del Reclutador: <span class="highlight">${nombre}</span></p>
    <p>Correo Electrónico del Reclutador: <span class="highlight">${correo}</span></p>
    <p>Empresa del Reclutador: <span class="highlight">${empresa}</span></p>
    <p>Mensaje del Reclutador:</p>
    <p>${mensaje}</p>
    <p>Puede responder a este correo para comunicarse con el reclutador.</p>
  </div>
</body>
</html>
        `,
    });

    console.log("Correo electrónico enviado con éxito:", data);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};
module.exports = {
  contactoLaburos,
};
