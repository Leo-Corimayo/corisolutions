import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { name, email, subject, company, message } = await req.json();

        // Configuración para usar Resend o SMTP mediante APIs HTTP (compatible con Cloudflare Edge)
        // Nota para Cori Inc: Debes registrarte en un servicio como Resend (resend.com), verificar coriinc.com y 
        // colocar tu API Key en la variable de entorno RESEND_API_KEY en Cloudflare Pages.
        const RESEND_API_KEY = process.env.RESEND_API_KEY;

        if (!RESEND_API_KEY) {
            console.error("Falta RESEND_API_KEY. Configura esta variable en Cloudflare Pages.");
            return NextResponse.json(
                { error: "Error de configuración de correo en el servidor." },
                { status: 500 }
            );
        }

        const resBody = {
            from: '"Cori Inc. Website" <leandro@coriinc.com>', // Quien envia (debe estar verificado)
            to: ['leandro@coriinc.com'], // Simplificado para asegurar éxito
            reply_to: email, // Permite responder directamente al cliente
            subject: `${subject || 'Nuevo Proyecto/Contacto'} de: ${name} ${company ? `(${company})` : ''}`,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #D4AF37; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nuevo Contacto Web - Cori Inc.</h2>
          
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email (Contacto Directo):</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37; margin-top: 20px;">
            <p style="margin: 0; white-space: pre-wrap;"><strong>Mensaje Técnico y Detalles del Proyecto:</strong><br><br>${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;">
          <p style="font-size: 11px; color: #888; text-align: center;">Este es un mensaje automatizado generado desde el formulario interactivo de Cori Inc. WebApp.</p>
        </div>
      `
        };

        // LLamada a la API de envío de correos (Ejemplo Resend)
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify(resBody)
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("Resend error:", errorData);
            return NextResponse.json(
                { 
                    error: "Error de Resend", 
                    details: errorData 
                }, 
                { status: res.status }
            );
        }

        return NextResponse.json({ message: "Correo enviado exitosamente" }, { status: 200 });
    } catch (error) {
        console.error("Error enviando correo:", error);
        return NextResponse.json(
            { error: "Error interno del servidor", details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
