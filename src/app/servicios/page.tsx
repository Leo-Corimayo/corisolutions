import Link from "next/link";
import { Code2, Cpu, Cpu as Microchip, Lightbulb, Home as SmartHome } from "lucide-react";
import styles from "./ServiciosIndex.module.css";

export default function ServiciosIndex() {
    return (
        <div className={styles.container}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Nuestro <span className="text-gold-gradient">Catálogo de Servicios</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Soluciones de alta ingeniería en software, hardware y estrategia tecnológica para potenciar el crecimiento de tu empresa.
                    </p>
                </div>
                <div className={styles.heroGlow}></div>
            </section>

            <section className={styles.servicesGridSection}>
                <div className={styles.grid}>
                    <Link href="/servicios/software" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapperGold}>
                                <Code2 size={28} />
                            </div>
                            <h3>Desarrollo de Software</h3>
                        </div>
                        <p>Construimos sistemas a medida, escalables y seguros para entornos corporativos de alta demanda.</p>
                        <span className={styles.readMore}>Saber más &rarr;</span>
                    </Link>

                    <Link href="/servicios/ia" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapperSilver}>
                                <Cpu size={28} />
                            </div>
                            <h3>Inteligencia Artificial</h3>
                        </div>
                        <p>Implementación de Machine Learning y agentes GenAI predictivos integrados a tus procesos de negocio.</p>
                        <span className={styles.readMore}>Saber más &rarr;</span>
                    </Link>

                    <Link href="/servicios/automatizacion" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapperBronze}>
                                <Microchip size={28} />
                            </div>
                            <h3>Automatización Industrial</h3>
                        </div>
                        <p>Control exacto sobre la maquinaria física mediante telemetría, robótica aplicada y tableros PLC.</p>
                        <span className={styles.readMore}>Saber más &rarr;</span>
                    </Link>

                    <Link href="/servicios/domotica" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapperGold}>
                                <SmartHome size={28} />
                            </div>
                            <h3>Domótica e IoT</h3>
                        </div>
                        <p>Ecosistemas de confort, seguridad perimetral y ahorro energético mediante recolección de datos por Internet.</p>
                        <span className={styles.readMore}>Saber más &rarr;</span>
                    </Link>

                    <Link href="/servicios/consultoria" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapperSilver}>
                                <Lightbulb size={28} />
                            </div>
                            <h3>Consultoría Técnica</h3>
                        </div>
                        <p>Asesoramiento ejecutivo y roadmaps de integración tecnológica personalizados de la mano de expertos IT.</p>
                        <span className={styles.readMore}>Saber más &rarr;</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
