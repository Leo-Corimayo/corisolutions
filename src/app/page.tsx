import styles from "./page.module.css";
import Link from "next/link";
import { ArrowRight, Cpu, Code2, Cpu as Microchip, Lightbulb, Home as SmartHome } from "lucide-react";

export default function Home() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        <span className="text-silver-gradient">Impulsando el </span>
                        <span className="text-gold-gradient">Futuro Tecnológico</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Soluciones integrales de alta ingeniería para dar un salto tecnológico en tu empresa.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/servicios" className={styles.primaryBtn}>
                            Descubrir Servicios
                            <ArrowRight size={18} />
                        </Link>
                        <Link href="/contacto" className={styles.secondaryBtn}>
                            Contactar
                        </Link>
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div className={styles.glowOrb1}></div>
                <div className={styles.glowOrb2}></div>
            </section>

            {/* Services Preview Section */}
            <section className={styles.servicesPreview}>
                <h2 className={styles.sectionTitle}>Nuestras Áreas de Ingeniería</h2>

                <div className={styles.grid}>
                    <Link href="/servicios/software" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <Code2 className={styles.iconGold} size={32} />
                            <h3>Desarrollo de Software</h3>
                        </div>
                        <p>Sistemas a medida, robustos y escalables para necesidades críticas.</p>
                    </Link>

                    <Link href="/servicios/ia" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <Cpu className={styles.iconSilver} size={32} />
                            <h3>Inteligencia Artificial</h3>
                        </div>
                        <p>Modelos predictivos y automatización cognitiva de procesos.</p>
                    </Link>

                    <Link href="/servicios/automatizacion" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <Microchip className={styles.iconBronze} size={32} />
                            <h3>Automatización</h3>
                        </div>
                        <p>Ingeniería de control avanzado para optimización industrial.</p>
                    </Link>

                    <Link href="/servicios/domotica" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <SmartHome className={styles.iconGold} size={32} />
                            <h3>Domótica e IoT</h3>
                        </div>
                        <p>Ecosistemas conectados para hogares e industrias inteligentes.</p>
                    </Link>

                    <Link href="/servicios/consultoria" className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            <Lightbulb className={styles.iconSilver} size={32} />
                            <h3>Consultoría Técnica</h3>
                        </div>
                        <p>Asesoramiento experto para transformar tu infraestructura.</p>
                    </Link>
                </div>
            </section>
        </div>
    );
}
