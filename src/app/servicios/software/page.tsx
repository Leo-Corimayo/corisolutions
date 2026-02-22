import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Code2, Server, Smartphone, Database } from "lucide-react";
import styles from "../Service.module.css";

export default function SoftwareService() {
    return (
        <div className={styles.container}>
            {/* Hero Service */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <Link href="/" className={styles.backButton}>
                        <ArrowLeft size={18} /> Volver al inicio
                    </Link>
                    <div className={styles.iconWrapper}>
                        <Code2 size={48} className={styles.iconGold} />
                    </div>
                    <h1 className={styles.title}>
                        Desarrollo de <span className="text-gold-gradient">Software</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Ingeniería de software robusta, escalable y a medida para operaciones críticas y transformación digital.
                    </p>
                </div>
                <div className={styles.heroGlow}></div>
            </section>

            {/* Details Section */}
            <section className={styles.detailsSection}>
                <div className={styles.featuresGrid}>
                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Server className={styles.iconSilver} size={32} />
                        <h3>Arquitectura Cloud & Backend</h3>
                        <p>Diseño de microservicios, APIs de alto rendimiento y bases de datos distribuidas preparadas para escalar infinitamente.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Smartphone className={styles.iconSilver} size={32} />
                        <h3>Aplicaciones Web y Móviles</h3>
                        <p>Interfaces nativas y web apps progresivas centradas en la experiencia del usuario y performance radical.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Database className={styles.iconSilver} size={32} />
                        <h3>Sistemas Core Empresariales</h3>
                        <p>Desde CRMs a medida hasta sistemas ERP que se adaptan exactamente a los flujos únicos de tu industria.</p>
                    </div>
                </div>

                {/* Info Block */}
                <div className={styles.infoBlock}>
                    <div className={styles.infoText}>
                        <h2>Innovación en cada línea de código</h2>
                        <p>En cori.solutions no construimos "páginas web"; desarrollamos activos tecnológicos reales. Utilizamos los mismos stacks que las empresas líderes mundiales para garantizar que tu software no sea un gasto, sino el motor de tu salto tecnológico para la próxima década.</p>
                        <Link href="/contacto" className={styles.ctaButton}>
                            Iniciar un Proyecto de Software
                        </Link>
                    </div>
                    <div className={styles.imagePlaceholder}>
                        <Image
                            src="/assets/software-placeholder.png"
                            alt="Arquitectura de Software"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <div className={styles.glowEffect}></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
