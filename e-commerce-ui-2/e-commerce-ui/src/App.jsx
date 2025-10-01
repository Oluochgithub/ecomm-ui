import React, {useState,useEffect} from 'react';
import Header from './components/Header';
import FilterSideBar from './components/FilterSideBar';
import SeachBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import CartModal from './components/CartModal';
import {mockProducts, categories} from './mockdata/mockProducts';
import { useCart } from './context/CartContext';
import { useFilters } from './context/FilterContext';

const App = () => {
    const {cartItems,addToCart,removeFromCart} = useCart();
    const {selectedCategories,toggleCategory,searchTerm,setSearchTerm} = useFilters();
    const [filteredProducts,setFilteredProducts] = useState(mockProducts);
    const [isCartOpen,setIsCartOpen] = useState(false);
    useEffect(() => {
      let filtered = mockProducts;
      if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
      }
      if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      }
      setFilteredProducts(filtered);
    },[selectedCategories,searchTerm]);

    return (
      <div className='min-h-screen'>
        <Header cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)}/>
        <div className='flex'>
          <FilterSideBar
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={toggleCategory}
          />
        <main className='flex-1 p-6'>
          <SeachBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
          <ProductGrid products={filteredProducts} onAddToCart={addToCart}/>
        </main>
        </div>
          <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemoveItem={removeFromCart}
          />
      </div>
    );
  }

export default App
