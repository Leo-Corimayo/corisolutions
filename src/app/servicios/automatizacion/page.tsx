import Link from "next/link";
import { ArrowLeft, Cpu as Microchip, Zap, Settings, Factory } from "lucide-react";
import styles from "../Service.module.css";

export default function AutomationService() {
    return (
        <div className={styles.container}>
            {/* Hero Service */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <Link href="/" className={styles.backButton}>
                        <ArrowLeft size={18} /> Volver al inicio
                    </Link>
                    <div className={styles.iconWrapper}>
                        <Microchip size={48} className={styles.iconBronze} />
                    </div>
                    <h1 className={styles.title}>
                        Ingeniería en <span className="text-bronze-gradient">Automatización</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Control total sobre tus procesos físicos. Optimizando el rendimiento industrial mediante hardware de precisión y software embebido.
                    </p>
                </div>
                <div className={styles.heroGlow}></div>
            </section>

            {/* Details Section */}
            <section className={styles.detailsSection}>
                <div className={styles.featuresGrid}>
                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Factory className={styles.iconGold} size={32} />
                        <h3>Automatización Industrial</h3>
                        <p>Diseño, programación y puesta en marcha de sistemas PLC y control SCADA para plantas de producción avanzadas.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Zap className={styles.iconGold} size={32} />
                        <h3>Robótica Aplicada</h3>
                        <p>Integración de brazos robóticos y celdas de automatización para tareas de alta velocidad y repetitividad milimétrica.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Settings className={styles.iconGold} size={32} />
                        <h3>Instrumentación & Sensores</h3>
                        <p>Retrofit de maquinaria antigua y adquisición de datos en tiempo real mediante telemetría industrial de última generación.</p>
                    </div>
                </div>

                {/* Info Block */}
                <div className={styles.infoBlock}>
                    <div className={styles.infoText}>
                        <h2>Cerrando la brecha física-digital</h2>
                        <p>El error humano y el tiempo de inactividad de las máquinas son los mayores costos ocultos de tu industria. Mediante tableros de control avanzados y actuadores conectados, te permitimos gobernar tus líneas de ensamblaje desde una pantalla en la nube, con una exactitud de milisegundos.</p>
                        <Link href="/contacto" className={styles.ctaButton}>
                            Cotizar Automatización
                        </Link>
                    </div>
                    <div className={styles.imagePlaceholder}>
                        {/* Note: This is where the AI generated image will go */}
                        <div className={styles.glowEffectBronze}></div>
                        <span>Brazo Robótico Industrial Operando</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
