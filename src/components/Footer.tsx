import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Columna Branding */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/assets/logo.png"
                                alt="cori.solutions logo"
                                width={140}
                                height={46}
                                className={styles.logo}
                                style={{ objectFit: 'contain' }}
                            />
                        </Link>
                        <p className={styles.description}>
                            Soluciones tecnológicas integrales de alta ingeniería. Impulsando el avance de la industria a través de la IA, robótica y el IoT.
                        </p>
                    </div>

                    {/* Columna Enlaces */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Servicios</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/servicios/software">Desarrollo de Software</Link></li>
                            <li><Link href="/servicios/ia">Inteligencia Artificial</Link></li>
                            <li><Link href="/servicios/automatizacion">Automatización</Link></li>
                            <li><Link href="/servicios/domotica">Domótica e IoT</Link></li>
                            <li><Link href="/servicios/consultoria">Consultoría Técnica</Link></li>
                        </ul>
                    </div>

                    {/* Columna Contacto */}
                    <div className={styles.contactCol}>
                        <h4 className={styles.colTitle}>Contacto</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <Mail size={18} className={styles.icon} />
                                <a href="mailto:cori.solution.ar@gmail.com">cori.solution.ar@gmail.com</a>
                            </li>
                            <li>
                                <MapPin size={18} className={styles.icon} />
                                <span>Argentina</span>
                            </li>
                        </ul>

                        <div className={styles.socialWrapper}>
                            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {currentYear} cori.solutions. Todos los derechos reservados.</p>
                    <div className={styles.legalLinks}>
                        <Link href="#">Privacidad</Link>
                        <Link href="#">Términos de Servicio</Link>
                    </div>
                </div>
            </div>

            {/* Decorative Glow */}
            <div className={styles.footerGlow}></div>
        </footer>
    );
}
