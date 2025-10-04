// Importa la librería Nodemailer para manejar el envío de correos
const nodemailer = require('nodemailer');

// ⚠️ IMPORTANTE: Configura tus credenciales de envío (SMTP) ⚠️
// Estas variables DEBEN ser almacenadas de forma segura como
// variables de entorno (environment variables) en tu VPS o plataforma serverless
const transporter = nodemailer.createTransport({
    // Ejemplo: Configuración para Gmail o Gsuite
    host: process.env.EMAIL_HOST || 'smtp.gmail.com', // Por ejemplo: 'smtp.sendgrid.net'
    port: process.env.EMAIL_PORT || 587,
    secure: false, // true para 465, false para otros puertos como 587
    auth: {
        user: process.env.EMAIL_USER, // Tu dirección de correo de envío
        pass: process.env.EMAIL_PASS, // La contraseña o App Password (clave de aplicación)
    },
});

// Función principal que manejará la petición HTTP (POST)
module.exports = async (req, res) => {
    // Solo permitir peticiones POST
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    // 1. Extraer los datos del cuerpo de la petición (JSON enviado desde React)
    const { name, email, phone, message } = req.body;
    
    // 2. Definir el destinatario
    const DESTINATARIO = "luismedina@quantify.net.pe";

    // 3. Validar datos mínimos
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Faltan campos obligatorios: nombre, email y mensaje.' });
    }

    try {
        // 4. Configurar el contenido del correo
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`, // Quién envía (aparece como remitente)
            to: DESTINATARIO, // El correo que especificaste
            subject: `Nuevo contacto web de ${name} | Quantify`,
            text: `
                Nombre: ${name}
                Email: ${email}
                Teléfono: ${phone || 'No proporcionado'}
                ---
                Mensaje:
                ${message}
            `,
            html: `
                <h2>Detalles de Contacto</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
                <hr>
                <h3>Mensaje:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // 5. Enviar el correo
        await transporter.sendMail(mailOptions);

        // 6. Responder al frontend con éxito
        return res.status(200).json({ message: 'Correo enviado con éxito a ' + DESTINATARIO });

    } catch (error) {
        console.error('Error al enviar el correo:', error);
        // 7. Responder al frontend con error
        return res.status(500).json({ error: 'Fallo el envío del correo.', details: error.message });
    }
};