"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Loader2 } from "lucide-react";
import styles from "./Contact.module.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "Consulta General",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", company: "", subject: "Consulta General", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <Link href="/" className={styles.backButton}>
                    <ArrowLeft size={16} /> Volver al inicio
                </Link>

                <div className={styles.mainGrid}>
                    {/* Left Column: Title + Form */}
                    <div className={styles.leftCol}>
                        <h1 className={styles.mainTitle}>
                            Hablemos sobre tu<br />próximo proyecto
                        </h1>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ej: Juan Pérez"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="juan@ejemplo.com"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="company">Empresa (Opcional)</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Nombre de tu organización"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="subject">Asunto o Servicio de Interés</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="Consulta General">Consulta General</option>
                                    <option value="Software & IA">Software & IA</option>
                                    <option value="Domótica & Automatización">Domótica & Automatización</option>
                                    <option value="Seguridad Tecnológica">Seguridad Tecnológica</option>
                                    <option value="Cotización de Proyecto">Cotización de Proyecto</option>
                                    <option value="Otro">Otro (Especificar en mensaje)</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Tu Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Cuéntanos más sobre tu requerimiento..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <Loader2 className={styles.spinner} size={20} />
                                ) : (
                                    "[ ENVIAR MENSAJE ]"
                                )}
                            </button>

                            {submitStatus === "success" && (
                                <div className={styles.successMessage}>
                                    ¡Gracias! Tu mensaje ha sido enviado con éxito.
                                </div>
                            )}
                            {submitStatus === "error" && (
                                <div className={styles.errorMessage}>
                                    Error al enviar el mensaje. Intenta nuevamente.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Right Column: Info + Image */}
                    <div className={styles.rightCol}>
                        <div className={styles.infoSection}>
                            <div className={styles.infoItem}>
                                <MapPin size={22} className={styles.infoIcon} />
                                <div className={styles.infoText}>
                                    <span className={styles.infoLabel}>Nuestras Oficinas</span>
                                    <div className={styles.infoContent}>La Rioja, Argentina</div>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <Mail size={22} className={styles.infoIcon} />
                                <div className={styles.infoText}>
                                    <span className={styles.infoLabel}>Correo Electrónico</span>
                                    <div className={styles.infoContent}>
                                        <a href="mailto:leandro@coriinc.com">leandro@coriinc.com</a>
                                        <a href="mailto:lcorimayo@coriinc.com">lcorimayo@coriinc.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <Phone size={22} className={styles.infoIcon} />
                                <div className={styles.infoText}>
                                    <span className={styles.infoLabel}>Teléfono</span>
                                    <div className={styles.infoContent}>
                                        <a href="tel:+5493874735161">+54 9 387 473-5161</a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.socialIcons}>
                                <Instagram size={20} className={styles.socialIcon} />
                                <Linkedin size={20} className={styles.socialIcon} />
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                <Facebook size={20} className={styles.socialIcon} />
                            </div>
                        </div>

                        <div className={styles.imageContainer}>
                            <Image
                                src="/images/contacto-premium.png"
                                alt="Cori Inc Technology"
                                width={800}
                                height={800}
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
