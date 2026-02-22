"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import styles from "./Contact.module.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                setFormData({ name: "", email: "", company: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.heroGlow}></div>

            <div className={styles.contentWrapper}>
                <Link href="/" className={styles.backButton}>
                    <ArrowLeft size={18} /> Volver al inicio
                </Link>

                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Iniciemos una <span className="text-gold-gradient">Conversación</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Estamos listos para escalar tu infraestructura tecnológica al siguiente nivel. Contáctanos y un ingeniero se comunicará contigo a la brevedad.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Formulario */}
                    <div className={`glass-panel ${styles.formContainer}`}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ingresa tu nombre"
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
                                    required
                                    placeholder="tu@empresa.com"
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
                                <label htmlFor="message">Mensaje / Proyecto</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Cuéntanos brevemente sobre tus necesidades tecnológicas..."
                                    rows={5}
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <><Loader2 className={styles.spinner} size={18} /> Procesando...</>
                                ) : (
                                    <><Send size={18} /> Enviar Mensaje</>
                                )}
                            </button>

                            {submitStatus === "success" && (
                                <div className={styles.successMessage}>
                                    ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                                </div>
                            )}
                            {submitStatus === "error" && (
                                <div className={styles.errorMessage}>
                                    Hubo un error al enviar el mensaje. Intenta nuevamente.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Información de Contacto */}
                    <div className={styles.infoContainer}>
                        <div className={`glass-panel ${styles.infoCard}`}>
                            <h3>Información Directa</h3>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapperGold}><Mail size={20} /></div>
                                <div>
                                    <h4>Correo</h4>
                                    <a href="mailto:cori.solution.ar@gmail.com">cori.solution.ar@gmail.com</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapperSilver}><Phone size={20} /></div>
                                <div>
                                    <h4>WhatsApp Consultas</h4>
                                    <a href="#" target="_blank" rel="noopener noreferrer">+54 9 (Próximamente)</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapperBronze}><MapPin size={20} /></div>
                                <div>
                                    <h4>Sede Principal</h4>
                                    <p>Argentina</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.aestheticBox}>
                            <div className={styles.aestheticText}>
                                "El futuro pertenece a quienes lo automatizan hoy, no a quienes lo reparan mañana."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
