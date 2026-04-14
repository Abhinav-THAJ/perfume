'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

type AddToCartProps = {
  product: {
    id?: string;
    name: string;
    price: string | number;
    images?: string[];
  };
  className?: string;
};

export default function AddToCartButton({ product, className }: AddToCartProps) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: product.id ? String(product.id) : product.name,
      name: product.name,
      price: String(product.price),
      image: product.images && product.images.length > 0 ? product.images[0] : '/images/gallery_female.png',
      quantity: 1
    });
  };

  return (
    <button onClick={handleAdd} className={`btn btn-solid ${className || ''}`}>
      Add to Cart
    </button>
  );
}
