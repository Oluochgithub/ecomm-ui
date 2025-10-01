import React from 'react';

const ProductCard = ({product, onAddToCard}) => {
    const{ id,title,price,image,description}= product;

    return (
        <div className='border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
            <img src={image} alt={title} key={id} className='w-full h-48 object-cover'/>
            <div className='p-4'>
                <h3 className='text-lg font-semibold mb-2'>{title}</h3>
                <p className='text-gray-600 mb-2 line-clamp-2'>{description}</p>
                <div className='text-xl font-bold mb-4'>${price.toFixed(2)}</div>
                <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600' onClick={() => onAddToCard(product)}>Add to Cart</button>
            </div>

        </div>
    );


}
export default ProductCard;