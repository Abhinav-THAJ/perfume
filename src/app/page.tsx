import Link from 'next/link';
import productsData from '../data/products.json';
import styles from './page.module.css';
import AddToCartButton from '@/components/AddToCartButton';

export default function Home() {
  // Get 4 featured products & preserve original index for routing
  const featuredProducts = productsData.map((p, i) => ({ ...p, originalIndex: i })).filter(p => p.images && p.images.length > 0).slice(0, 4);

  return (
    <div className={styles.home}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="/images/gallery_female.png" alt="Luxury Perfume" />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Essence of Elegance</h1>
          <p className={styles.heroDesc}>
            Discover our exclusive collection of luxury fragrances, crafted to leave a lasting impression for every second.
          </p>
          <Link href="/shop" className="btn btn-solid">Explore the Collection</Link>
        </div>
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className={styles.highlight}>
        <div className={styles.highlightGrid}>
          <div className={styles.highlightContent}>
            <h2>Artisanal Craftsmanship</h2>
            <p>
              Every drop is a masterpiece. We source the finest ingredients from around the world—delicate pure white florals, rich oriental ouds, and rare spices—to compose symphonies of scent that echo your unique spirit.
            </p>
            <Link href="/about" className="btn">Our Heritage</Link>
          </div>
          <div className={styles.highlightImage}>
            <img src="/images/gallery_macro.png" alt="Perfume Macro Details" />
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className={`section container ${styles.featured}`}>
        <div className={styles.sectionHeader}>
          <h2>Signature Scents</h2>
          <p>Curated selections for the modern connoisseur</p>
        </div>
        
        <div className="grid grid-4">
          {featuredProducts.map((product, index) => (
            <div key={`${product.name}-${index}`} className={styles.productCard}>
              <Link href={`/product/${product.originalIndex}`} className={styles.productImage}>
                <img src={product.images[0]} alt={product.name} />
              </Link>
              <div className={styles.productDetails}>
                <Link href={`/product/${product.originalIndex}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className={styles.productName}>{product.name}</h3>
                </Link>
                <p className={styles.productPrice}>₹{product.price}</p>
                <AddToCartButton product={product} className={styles.cartBtn} />
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.centerBtn}>
          <Link href="/shop" className="btn">View All Products</Link>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className={styles.philosophyContainer}>
        <div className={`container ${styles.philosophyGrid}`}>
          <div className={styles.imageCol}>
             <img src="/images/home_philosophy.png" alt="Perfume Philosophy Maker" />
          </div>
          <div className={styles.textCol}>
            <span className={styles.label}>Our Ethos</span>
            <h2>Mastery of the Senses</h2>
            <p>Every bottle of i-BAN is a testament to uncompromising quality. We believe that true luxury lies in the details. From the initial spark of inspiration to the careful selection of raw materials, our process is guided by a passion for perfection.</p>
            <p>Experience fragrances that are not merely worn, but lived—designed to transform every second into an unforgettable memory.</p>
          </div>
        </div>
      </section>

      {/* ANATOMY OF A SCENT / INGREDIENTS SECTION */}
      <section className={`section container ${styles.ingredients}`}>
        <div className={styles.sectionHeader}>
          <h2>The Anatomy of a Scent</h2>
          <p>Rare ingredients sourced from around the globe</p>
        </div>
        <div className="grid grid-3">
          <div className={styles.ingredientCard}>
             <div className={styles.ingredientImage}>
               <img src="/images/ingredient_3.png" alt="Top Notes" />
             </div>
             <h3>Crisp Top Notes</h3>
             <p>Vibrant bergamot and fresh citruses that awaken the senses immediately.</p>
          </div>
          <div className={styles.ingredientCard}>
             <div className={styles.ingredientImage}>
               <img src="/images/ingredient_1.png" alt="Heart Notes" />
             </div>
             <h3>Elegant Heart</h3>
             <p>Pristine white florals and pure rose absolute providing deep, emotional resonance.</p>
          </div>
          <div className={styles.ingredientCard}>
             <div className={styles.ingredientImage}>
               <img src="/images/ingredient_2.png" alt="Base Notes" />
             </div>
             <h3>Rich Base Notes</h3>
             <p>Warm amber and rare oud woods anchoring the fragrance in timeless luxury.</p>
          </div>
        </div>
      </section>

      {/* UNBOXING EXPERIENCE SECTION */}
      <section className={styles.unboxingContainer}>
        <div className={`container ${styles.unboxingGrid}`}>
          <div className={styles.textCol}>
            <span className={styles.label}>The Unboxing</span>
            <h2>A Gift of Luxury</h2>
            <p>The journey of an i-BAN fragrance begins before the first spray. Our signature white and gold packaging is designed to be an event in itself—a moment of anticipation, elegance, and tactile delight.</p>
            <p>Every bottle is carefully nested, ensuring that whether you are gifting a loved one or indulging yourself, the experience is nothing short of breathtaking.</p>
          </div>
          <div className={styles.imageCol}>
             <img src="/images/unboxing.png" alt="Luxury Unboxing Experience" />
          </div>
        </div>
      </section>

      {/* BOUTIQUE HIGHLIGHT SECTION */}
      <section className={styles.boutiqueContainer}>
        <div className={styles.boutiqueContent}>
          <span className={styles.labelDark}>Visit Us</span>
          <h2>Immerse in the World of i-BAN</h2>
          <p>Step into our exquisite flagship boutiques. Designed with the same clean, radiant minimalism as our fragrances, our spaces invite you to explore, discover, and find your perfect signature scent surrounded by true luxury.</p>
          <Link href="/contact" className="btn btn-solid">Find a Boutique</Link>
        </div>
      </section>
    </div>
  );
}
