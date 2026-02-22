import Link from "next/link";
import { ArrowLeft, Lightbulb, Users, BarChart3, Presentation } from "lucide-react";
import styles from "../Service.module.css";

export default function ConsultingService() {
    return (
        <div className={styles.container}>
            {/* Hero Service */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <Link href="/" className={styles.backButton}>
                        <ArrowLeft size={18} /> Volver al inicio
                    </Link>
                    <div className={styles.iconWrapper}>
                        <Lightbulb size={48} className={styles.iconSilver} />
                    </div>
                    <h1 className={styles.title}>
                        Consultoría <span className="text-silver-gradient">Técnica</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Dirección estratégica y asesoramiento profundo para garantizar el éxito de tu transformación tecnológica.
                    </p>
                </div>
                <div className={styles.heroGlow}></div>
            </section>

            {/* Details Section */}
            <section className={styles.detailsSection}>
                <div className={styles.featuresGrid}>
                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Presentation className={styles.iconSilver} size={32} />
                        <h3>Auditoría de Sistemas</h3>
                        <p>Análisis exhaustivo de tu código, arquitectura e infraestructura actual buscando fallos de seguridad o cuellos de botella.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <BarChart3 className={styles.iconSilver} size={32} />
                        <h3>Planeamiento Estratégico</h3>
                        <p>Elaboración de hojas de ruta (roadmaps) tecnológicas a 5 años, alineadas con los objetivos financieros de tu mesa directiva.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Users className={styles.iconSilver} size={32} />
                        <h3>Formación Especializada</h3>
                        <p>Capacitación en técnicas modernas (Docker, Kubernetes, MLOps) orientada a subir el nivel de tus equipos de ingeniería internos.</p>
                    </div>
                </div>

                {/* Info Block */}
                <div className={styles.infoBlock}>
                    <div className={styles.imagePlaceholder}>
                        {/* Note: This is where the AI generated image will go */}
                        <div className={styles.glowEffectSilver}></div>
                        <span>Ingenieros analizando Arquitectura de Datos</span>
                    </div>
                    <div className={styles.infoText}>
                        <h2>Tu socio tecnológico experto</h2>
                        <p>No basta con comprar software; hay que saber integrarlo en la cultura de la empresa. En cori.solutions te dotamos del entendimiento avanzado necesario para tomar decisiones de IT fundamentadas, reduciendo el riesgo y evitando la adopción técnica fallida.</p>
                        <Link href="/contacto" className={styles.ctaButton}>
                            Programar Asesoría
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
