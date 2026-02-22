"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Ocultar si scrolea hacia abajo, mostrar si scrolea hacia arriba
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setIsScrolled(currentScrollY > 20);
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isVisible ? "" : styles.hidden}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoContainer}>
                    <Image
                        src="/assets/logo.png"
                        alt="cori.solutions logo"
                        width={120}
                        height={40}
                        className={`${styles.logo} ${isSpinning ? styles.spin : ''}`}
                        style={{ objectFit: 'contain' }}
                        onClick={() => {
                            setIsSpinning(true);
                        }}
                        onAnimationEnd={() => setIsSpinning(false)}
                    />
                    <span className={styles.brandName}>
                        <span className={styles.brandCori}>Cori</span>
                        <span className={styles.brandSolutions}>Solutions</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href="/" className={styles.navLink}>Inicio</Link>
                    <div className={styles.servicesDropdown}>
                        <span className={styles.navLink}>Servicios</span>
                        <div className={styles.dropdownContent}>
                            <Link href="/servicios">Ver todos los servicios</Link>
                            <Link href="/servicios/software">Desarrollo de Software</Link>
                            <Link href="/servicios/ia">Inteligencia Artificial</Link>
                            <Link href="/servicios/automatizacion">Automatización</Link>
                            <Link href="/servicios/domotica">Domótica e IoT</Link>
                            <Link href="/servicios/consultoria">Consultoría</Link>
                        </div>
                    </div>
                    <Link href="/contacto" className={styles.ctaButton}>Contacto</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Menu">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
                <Link href="/" onClick={toggleMenu}>Inicio</Link>
                <Link href="/servicios" className={styles.mobileCategory} onClick={toggleMenu}>Servicios</Link>
                <div className={styles.mobileSublinks}>
                    <Link href="/servicios/software" onClick={toggleMenu}>Software</Link>
                    <Link href="/servicios/ia" onClick={toggleMenu}>Inteligencia Artificial</Link>
                    <Link href="/servicios/automatizacion" onClick={toggleMenu}>Automatización</Link>
                    <Link href="/servicios/domotica" onClick={toggleMenu}>Domótica e IoT</Link>
                    <Link href="/servicios/consultoria" onClick={toggleMenu}>Consultoría</Link>
                </div>
                <Link href="/contacto" className={styles.mobileCta} onClick={toggleMenu}>Contacto</Link>
            </div>
        </nav>
    );
}
