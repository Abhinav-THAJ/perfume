'use client';

import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './page.module.css';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to backend/Stripe
    setTimeout(() => {
      clearCart();
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className={`page container ${styles.successContainer}`}>
        <div className={styles.successCard}>
          <h2>Order Confirmed</h2>
          <p>Thank you for choosing i-BAN PERFUMES. Your luxury fragrance is being prepared.</p>
          <p>An email receipt has been sent to you.</p>
          <Link href="/shop" className="btn btn-solid" style={{ marginTop: '2rem' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={`page container ${styles.emptyContainer}`}>
        <h2>Your Cart is Empty</h2>
        <p>You have no items in your cart to checkout.</p>
        <Link href="/shop" className="btn btn-solid" style={{ marginTop: '2rem' }}>
          Explore Our Collection
        </Link>
      </div>
    );
  }

  return (
    <div className={`page container ${styles.checkoutContainer}`}>
      <div className={styles.checkoutGrid}>
        
        {/* Form Column */}
        <div className={styles.formCol}>
          <h2>Checkout</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.section}>
              <h3>Contact Information</h3>
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className={styles.section}>
              <h3>Shipping Address</h3>
              <div className={styles.inputRow}>
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" />
              <div className={styles.inputRow}>
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="Postal Code" required />
              </div>
            </div>

            <div className={styles.section}>
              <h3>Payment details</h3>
              <div className={styles.cardInput}>
                 <input type="text" placeholder="Card Number" required />
                 <div className={styles.inputRow}>
                   <input type="text" placeholder="Exp (MM/YY)" required />
                   <input type="text" placeholder="CVC" required />
                 </div>
              </div>
            </div>

            <button type="submit" className={`btn btn-solid ${styles.submitBtn}`}>
              Place Order (₹{cartTotal.toFixed(2)})
            </button>
          </form>
        </div>

        {/* Order Summary Column */}
        <div className={styles.summaryCol}>
          <h3>Order Summary</h3>
          <div className={styles.summaryItems}>
            {cart.map(item => (
              <div key={item.id} className={styles.summaryItem}>
                <div className={styles.imageBox}>
                  <img src={item.image} alt={item.name} />
                  <span className={styles.badge}>{item.quantity}</span>
                </div>
                <div className={styles.details}>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
                <div className={styles.rowTotal}>
                  ₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.totals}>
            <div className={styles.totalRow}>
              <span>Subtotal</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={`${styles.totalRow} ${styles.grandTotal}`}>
              <span>Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
