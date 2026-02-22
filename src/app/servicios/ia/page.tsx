import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Cpu, BrainCircuit, LineChart, ShieldCheck } from "lucide-react";
import styles from "../Service.module.css";

export default function IAService() {
    return (
        <div className={styles.container}>
            {/* Hero Service */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <Link href="/" className={styles.backButton}>
                        <ArrowLeft size={18} /> Volver al inicio
                    </Link>
                    <div className={styles.iconWrapper}>
                        <Cpu size={48} className={styles.iconSilver} />
                    </div>
                    <h1 className={styles.title}>
                        Inteligencia <span className="text-silver-gradient">Artificial</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Implementamos el cerebro digital de tu empresa. Desde modelos predictivos hasta agentes autónomos.
                    </p>
                </div>
                <div className={styles.heroGlow}></div>
            </section>

            {/* Details Section */}
            <section className={styles.detailsSection}>
                <div className={styles.featuresGrid}>
                    <div className={`glass-panel ${styles.featureCard}`}>
                        <BrainCircuit className={styles.iconGold} size={32} />
                        <h3>Machine Learning Aplicado</h3>
                        <p>Algoritmos de aprendizaje profundo para análisis de comportamiento de clientes, optimización logística y control de calidad automatizado.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <LineChart className={styles.iconGold} size={32} />
                        <h3>Sistemas de Predicción</h3>
                        <p>Visualización y anticipación de tendencias del mercado, demanda de inventario y optimización financiera mediante Big Data.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <ShieldCheck className={styles.iconGold} size={32} />
                        <h3>Agentes GenAI Autónomos</h3>
                        <p>Integración de Modelos de Lenguaje Grandes (LLMs) para soporte automatizado, copilotos internos y generación de contenido dinámico.</p>
                    </div>
                </div>

                {/* Info Block */}
                <div className={styles.infoBlock}>
                    <div className={styles.imagePlaceholder}>
                        <Image
                            src="/assets/ia-placeholder.png"
                            alt="Red Neuronal AI"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className={styles.glowEffectSilver}></div>
                    </div>
                    <div className={styles.infoText}>
                        <h2>De la teoría a la utilidad real</h2>
                        <p>Muchas compañías hablan de Inteligencia Artificial; nosotros la implementamos para resolver problemas mecánicos. Transformamos la abrumadora cantidad de datos de tu organización en una ventaja competitiva neta automatizando lo repetitivo y escalando el conocimiento de tu equipo.</p>
                        <Link href="/contacto" className={styles.ctaButton}>
                            Explorar Soluciones de IA
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
