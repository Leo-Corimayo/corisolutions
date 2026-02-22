import Link from "next/link";
import { ArrowLeft, Home as SmartHome, Radio, Shield, Cctv } from "lucide-react";
import styles from "../Service.module.css";

export default function DomoticsService() {
    return (
        <div className={styles.container}>
            {/* Hero Service */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <Link href="/" className={styles.backButton}>
                        <ArrowLeft size={18} /> Volver al inicio
                    </Link>
                    <div className={styles.iconWrapper}>
                        <SmartHome size={48} className={styles.iconGold} />
                    </div>
                    <h1 className={styles.title}>
                        Domótica e <span className="text-gold-gradient">IoT</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Conectamos entornos físicos a la red. Edificios inteligentes y hogares que respiran, monitoreados 24/7.
                    </p>
                </div>
                <div className={styles.heroGlow}></div>
            </section>

            {/* Details Section */}
            <section className={styles.detailsSection}>
                <div className={styles.featuresGrid}>
                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Radio className={styles.iconSilver} size={32} />
                        <h3>Internet de las Cosas (IoT)</h3>
                        <p>Implementación de redes de sensores ambientales, energéticos y de ocupación comunicándose tridimensionalmente en la nube.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Shield className={styles.iconSilver} size={32} />
                        <h3>Control Climático y Energético</h3>
                        <p>Sistemas domóticos centralizados que reducen drásticamente la huella de carbono y el gasto operativo mediante rutinas autónomas.</p>
                    </div>

                    <div className={`glass-panel ${styles.featureCard}`}>
                        <Cctv className={styles.iconSilver} size={32} />
                        <h3>Seguridad Electrónica</h3>
                        <p>Integración de CCTV analítico con reconocimiento facial, control de acceso biométrico perimetral y alarmas proactivas.</p>
                    </div>
                </div>

                {/* Info Block */}
                <div className={styles.infoBlock}>
                    <div className={styles.infoText}>
                        <h2>Entornos que se adaptan a ti</h2>
                        <p>Ya sea para una planta de almacenamiento frío de 10,000m² o una residencia privada de lujo, desplegamos ecosistemas conectados (Cableados o Inalámbricos - Zigbee/Matter) para tener control total desde un simple panel táctil o tu teléfono móvil. El confort y la seguridad ya no son opcionales, son controlables de manera centralizada.</p>
                        <Link href="/contacto" className={styles.ctaButton}>
                            Evaluar Proyecto Domótico
                        </Link>
                    </div>
                    <div className={styles.imagePlaceholder}>
                        {/* Note: This is where the AI generated image will go */}
                        <div className={styles.glowEffect}></div>
                        <span>Casa Inteligente con Panel de Control IoT</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
