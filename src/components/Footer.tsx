import Link from 'next/link';
import styles from './Footer.module.css';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img src="/logo.png" alt="i-BAN PERFUMES" className={styles.logo} />
            <p>
              Discover the art of fine fragrance. Immerse yourself in our collection of luxury perfumes, crafted for those who appreciate the extraordinary.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.title}>Quick Links</h4>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/gallery" className={styles.link}>Gallery</Link>
              <Link href="/shop" className={styles.link}>Shop</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.title}>Customer Care</h4>
            <div className={styles.links}>
              <Link href="#" className={styles.link}>Shipping Policy</Link>
              <Link href="#" className={styles.link}>Returns & Refunds</Link>
              <Link href="#" className={styles.link}>FAQ</Link>
              <Link href="#" className={styles.link}>Terms of Service</Link>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.title}>Get in Touch</h4>
            <div className={styles.contact}>
              <p><MapPin size={16} style={{ display:'inline', marginRight:'8px' }} /> 123 Luxury Avenue, Paris</p>
              <p><Phone size={16} style={{ display:'inline', marginRight:'8px' }} /> +1 234 567 890</p>
              <p><Mail size={16} style={{ display:'inline', marginRight:'8px' }} /> info@i-banperfumes.com</p>
            </div>
            <div className={styles.social}>
              <a href="#">FB</a>
              <a href="#">IG</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} i-BAN PERFUMES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
