import styles from './page.module.css';

export default function Gallery() {
  const images = [
    // Row 1 & 2
    { src: '/images/gallery_female.png', alt: 'i-BAN Signature Bottle', span: 'col-span-2 row-span-2' },
    { src: '/images/gallery_macro.png', alt: 'i-BAN Macro Details', span: 'col-span-1 row-span-1' },
    { src: '/images/ingredient_2.png', alt: 'i-BAN Oud Foundation', span: 'col-span-1 row-span-1' },
    // Row 3 & 4
    { src: '/images/home_philosophy.png', alt: 'i-BAN Artisan Making', span: 'col-span-1 row-span-2' },
    { src: '/images/gallery_female.png', alt: 'i-BAN Golden Aura', span: 'col-span-2 row-span-1' },
    { src: '/images/ingredient_1.png', alt: 'i-BAN Pure Essences', span: 'col-span-2 row-span-1' },
    // Row 5
    { src: '/images/boutique.png', alt: 'i-BAN Boutique Experience', span: 'col-span-1 row-span-1' },
    { src: '/images/unboxing.png', alt: 'i-BAN Unboxing Luxury', span: 'col-span-1 row-span-1' },
    { src: '/images/ingredient_3.png', alt: 'i-BAN Fresh Citruses', span: 'col-span-1 row-span-1' },
  ];

  return (
    <div className="page">
      <div className={styles.header}>
        <h1>Visual Journey</h1>
        <p>Glimpses of elegance and refinement.</p>
      </div>

      <section className="container section">
        <div className={styles.masonryGrid}>
          {images.map((img, i) => (
            <div key={i} className={`${styles.galleryItem} ${styles[img.span.replace(' ', '-')] || ''}`}>
              <img src={img.src} alt={img.alt} />
              <div className={styles.overlay}>
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
