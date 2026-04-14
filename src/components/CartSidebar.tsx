'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartSidebar.module.css';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={() => setIsCartOpen(false)} />
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.items}>
          {cart.length === 0 ? (
            <div className={styles.emptyCart}>
              <ShoppingBag size={48} />
              <p>Your cart is empty.</p>
              <button className="btn" onClick={() => setIsCartOpen(false)}>Continue Shopping</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.itemDetails}>
                  <h4>{item.name}</h4>
                  <p className={styles.itemPrice}>₹{item.price}</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                  </div>
                </div>
                <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalBlock}>
              <span>Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <Link href="/checkout" onClick={() => setIsCartOpen(false)} className={`btn btn-solid ${styles.checkoutBtn}`}>
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
