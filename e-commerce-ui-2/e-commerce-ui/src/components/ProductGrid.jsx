import React from 'react';
import ProductCard from  './ProductCard';

const ProductGrid = (product, onAddToCard) => {
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {product.map((product)(
        <ProductCard key={product.id} product={product} onAddToCart={ onAddToCard}/>   
        ))}
        </div>
}
export default ProductGrid;