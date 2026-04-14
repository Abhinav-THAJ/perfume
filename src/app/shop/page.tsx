import productsData from '../../data/products.json';
import styles from './page.module.css';
import AddToCartButton from '@/components/AddToCartButton';
import Link from 'next/link';
export default function Shop() {
  const products = productsData.map((p, i) => ({ ...p, originalIndex: i })).filter(p => p.images && p.images.length > 0);

  return (
    <div className="page">
      <div className={styles.header}>
        <h1>The Collection</h1>
        <p>Explore our exclusive range of luxury fragrances</p>
      </div>

      <div className="container section">
        <div className="grid grid-3 grid-mobile-2">
          {products.map((product, index) => (
            <div key={`${product.name}-${index}`} className={styles.productCard}>
              <Link href={`/product/${product.originalIndex}`} className={styles.productImage}>
                <img src={product.images[0]} alt={product.name} />
              </Link>
              <div className={styles.productDetails}>
                <Link href={`/product/${product.originalIndex}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className={styles.productName}>{product.name}</h3>
                </Link>
                {product.shortDescription && <p className={styles.shortDesc}>{product.shortDescription}</p>}
                <div className={styles.prices}>
                  {product.salePrice ? (
                    <>
                      <span className={styles.salePrice}>₹{product.salePrice}</span>
                      <span className={styles.regularPriceStrikethrough}>₹{product.price}</span>
                    </>
                  ) : (
                    <span className={styles.regularPrice}>₹{product.price}</span>
                  )}
                </div>
                <AddToCartButton product={product} className={styles.cartBtn} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
