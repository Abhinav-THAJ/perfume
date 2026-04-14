import styles from './page.module.css';

export default function About() {
  return (
    <div className="page">
      <div className={styles.header}>
        <h1>Our Story</h1>
        <p>A legacy of luxury, craftsmanship, and olfactory excellence.</p>
      </div>

      {/* SECTION 1: Heritage */}
      <section className={styles.contentSection}>
        <div className="container grid grid-2">
          <div className={styles.imageBox}>
             <img src="/images/home_philosophy.png" alt="Heritage of Elegance" />
          </div>
          <div className={styles.textBox}>
            <h2>A Heritage of Elegance</h2>
            <p>i-BAN PERFUMES was born from a singular vision: to capture fleeting moments into eternal memories. "For every second," our philosophy dictates that a fragrance is more than just a scent—it is an invisible garment that elevates the everyday into the extraordinary.</p>
            <p>Since our inception, we have traveled the globe to discover how scent shapes emotion, curating a house of fragrances dedicated to absolute sophistication.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Crafting Process */}
      <section className={`${styles.contentSection} ${styles.bgLight}`}>
        <div className={`container grid grid-2 ${styles.reverseMobile}`}>
          <div className={styles.textBox}>
            <h2>The Art of Formulation</h2>
            <p>Every bottle of i-BAN undergoes a meticulous crafting process. We blend time-honored traditional techniques with modern innovation to synthesize notes that unfold beautifully over time.</p>
            <p>Our laboratories are sanctuaries of precision, where raw materials sit in quiet maceration until they reach their absolute peak, ensuring unparalleled longevity and projection in every spray.</p>
          </div>
          <div className={styles.imageBox}>
             <img src="/images/boutique.png" alt="Crafting Process" />
          </div>
        </div>
      </section>

      {/* SECTION 3: Sustainable Luxury */}
      <section className={styles.contentSection}>
        <div className="container grid grid-2">
          <div className={styles.imageBox}>
             <img src="/images/ingredient_1.png" alt="Sustainable Extraction" />
          </div>
          <div className={styles.textBox}>
            <h2>Sustainable Luxury</h2>
            <p>We pride ourselves on using rare, ethically sourced ingredients. Whether it’s hand-picked roses from Grasse, rich Ouds from the East, or crisp citruses from the Mediterranean coast, purity is our priority.</p>
            <p>We work directly with generational farmers, ensuring our supply chain is as elegant and respectful to the earth as the final perfume is on your skin.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Master Perfumers */}
      <section className={`${styles.contentSection} ${styles.bgLight}`}>
        <div className={`container grid grid-2 ${styles.reverseMobile}`}>
          <div className={styles.textBox}>
            <h2>The Master Noses</h2>
            <p>Our fragrances are composed by the world’s most celebrated master perfumers. Guided by instinct and seasoned by decades of experience, these artisans blend logic with poetry.</p>
            <p>They are the silent architects of the i-BAN experience, endlessly iterating until absolute perfection is captured within the glass.</p>
          </div>
          <div className={styles.imageBox}>
             <img src="/images/unboxing.png" alt="Master Perfumers" />
          </div>
        </div>
      </section>

      {/* SECTION 5: Ongoing Vision */}
      <section className={styles.contentSection}>
        <div className="container grid grid-2">
          <div className={styles.imageBox}>
             <img src="/images/gallery_female.png" alt="Global Vision" />
          </div>
          <div className={styles.textBox}>
            <h2>Our Global Vision</h2>
            <p>As we expand our boutiques from Paris to Dubai, Tokyo, and beyond, our core ethos remains entirely unchanged: delivering the ultimate fragrance experience.</p>
            <p>We invite you to step into the world of i-BAN, find your signature scent, and wear it as your most profound statement of self.</p>
            <div className={styles.signature}>
               Founder, i-BAN
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
