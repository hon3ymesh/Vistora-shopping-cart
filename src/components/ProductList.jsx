import React from 'react';
import mockProducts from '../data/mockProducts';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';
import '../styles/global.css';

const ProductList = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="product-list">
      {mockProducts.map(product => (
        <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;