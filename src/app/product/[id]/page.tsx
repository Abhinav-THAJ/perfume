'use client';

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import productsData from '../../../data/products.json';
import styles from './page.module.css';
import { useCart } from '../../../context/CartContext';
import { Minus, Plus, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const productIndex = parseInt(resolvedParams.id, 10);
  const product = productsData[productIndex];

  if (!product) {
    return (
      <div className={`page container ${styles.pdpContainer}`} style={{ textAlign: 'center' }}>
        <h2>Product not found.</h2>
        <Link href="/shop" className="btn btn-solid" style={{ marginTop: '2rem' }}>Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: `${product.name}-${productIndex}`,
      name: product.name,
      price: product.price,
      image: product.images && product.images.length > 0 ? product.images[0] : '/images/gallery_female.png',
      quantity: quantity
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/checkout');
  };

  return (
    <div className={`page container ${styles.pdpContainer}`}>
      <Link href="/shop" className={styles.backLink}>
        <ChevronLeft size={20} /> Back to Collection
      </Link>
      
      <div className={styles.pdpGrid}>
        {/* Left Side: Image */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
             <img src={product.images && product.images.length > 0 ? product.images[0] : '/images/gallery_female.png'} alt={product.name} />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className={styles.detailsSection}>
          <span className={styles.brandTag}>i-BAN PERFUMES</span>
          <h1 className={styles.title}>{product.name}</h1>
          
          <div className={styles.priceRow}>
            {product.salePrice ? (
              <>
                <span className={styles.salePrice}>₹{product.salePrice}</span>
                <span className={styles.regularPriceStrikethrough}>₹{product.price}</span>
              </>
            ) : (
              <span className={styles.regularPrice}>₹{product.price}</span>
            )}
          </div>

          <div className={styles.description}>
            <p>{product.shortDescription || "An exquisite, handcrafted fragrance designed to leave a sophisticated and enduring impression. Carefully selected pure essences blend harmoniously to create a truly luxurious olfactory experience."}</p>
          </div>

          <div className={styles.actionsBox}>
            <div className={styles.quantityWrapper}>
              <span className={styles.qtyLabel}>Quantity</span>
              <div className={styles.quantitySelector}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
              </div>
            </div>

            <div className={styles.buttonsWrapper}>
              <button onClick={handleAddToCart} className={`btn btn-outline ${styles.btnCart}`}>Add to Cart</button>
              <button onClick={handleBuyNow} className={`btn btn-solid ${styles.btnBuy}`}>Buy Now</button>
            </div>
          </div>
          
          <div className={styles.extraInfo}>
            <p><strong>SKU:</strong> IBAN-{1000 + productIndex}</p>
            <p><strong>Category:</strong> {product.categories ? product.categories.join(', ') : 'Exclusive Fragrances'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
