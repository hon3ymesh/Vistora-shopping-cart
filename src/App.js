import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;