import styles from './page.module.css';

export default function Contact() {
  return (
    <div className="page">
      <div className={styles.header} style={{ backgroundImage: 'url(/images/contact_bg.png)' }}>
        <div className={styles.headerContent}>
          <h1>Get in Touch</h1>
          <p>We would love to hear from you</p>
        </div>
      </div>

      <section className="container section">
        <div className={`grid grid-2 ${styles.contactGrid}`}>
          <div className={styles.contactInfo}>
            <h2>Customer Service</h2>
            <p>Our dedicated team is available to assist you with any inquiries regarding our products, bespoke services, or orders.</p>
            
            <div className={styles.infoBlock}>
              <h4>Headquarters</h4>
              <p>123 Luxury Avenue, Paris, France 75001</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h4>Email Us</h4>
              <p>info@i-banperfumes.com</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h4>Call Us</h4>
              <p>+1 234 567 890</p>
              <p className={styles.subtext}>Mon-Fri, 9am - 6pm CET</p>
            </div>
          </div>

          <div className={styles.formContainer}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input type="text" className="input" placeholder="Jane Doe" required />
              </div>
              
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type="email" className="input" placeholder="jane@example.com" required />
              </div>
              
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea className="input" placeholder="How can we help you?" required></textarea>
              </div>
              
              <button type="button" className="btn btn-solid">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
