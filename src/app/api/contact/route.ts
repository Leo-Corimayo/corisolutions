import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, company, message } = await req.json();

        // Configuración del transporter de Nodemailer
        // Nota para cori.solutions: Deben reemplazar PASS_AQUI con una contraseña de aplicación
        // del correo cori.solution.ar@gmail.com o configurar variables de entorno reales.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'cori.solution.ar@gmail.com',
                pass: process.env.EMAIL_PASSWORD || 'hvux zrfs mxdg qbwa',
            },
        });

        // Opciones del correo electrónico a enviar
        const mailOptions = {
            from: '"cori.solutions Website" <cori.solution.ar@gmail.com>', // Quien envia (el sistema)
            to: 'cori.solution.ar@gmail.com', // A quien llega el contacto (la misma empresa)
            replyTo: email, // Permite responder directamente al cliente
            subject: `Nuevo Proyecto/Contacto de: ${name} ${company ? `(${company})` : ''}`,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #D4AF37; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nuevo Contacto Web - cori.solutions</h2>
          
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email (Contacto Directo):</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37; margin-top: 20px;">
            <p style="margin: 0; white-space: pre-wrap;"><strong>Mensaje Técnico y Detalles del Proyecto:</strong><br><br>${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;">
          <p style="font-size: 11px; color: #888; text-align: center;">Este es un mensaje automatizado generado desde el formulario interactivo de cori.solutions WebApp.</p>
        </div>
      `,
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Correo enviado exitosamente" }, { status: 200 });
    } catch (error) {
        console.error("Error enviando correo:", error);
        return NextResponse.json(
            { error: "Error interno del servidor al procesar el formulario de contacto." },
            { status: 500 }
        );
    }
}
