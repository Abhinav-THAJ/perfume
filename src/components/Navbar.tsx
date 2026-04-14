"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import styles from './Navbar.module.css';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when shifting routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className="container">
          <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.png" alt="i-BAN PERFUMES" />
            </Link>
            
            <div className={styles.links}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={styles.link}
                  style={{ color: pathname === link.path ? 'var(--color-accent)' : '' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className={styles.icons}>
              <Search size={20} className={styles.icon} />
              <button className={styles.cartBtnWrapper} onClick={() => setIsCartOpen(true)}>
                <ShoppingBag size={20} className={styles.icon} />
                {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
              </button>
              <button 
                className={`${styles.icon} ${styles.menuIcon}`} 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileOverlay}
          >
            <div className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={styles.mobileLink}
                  style={{ color: pathname === link.path ? 'var(--color-accent)' : '' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
