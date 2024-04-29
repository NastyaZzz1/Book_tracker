import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    let products = [
        {id: 1, name: 'Первая книга', price: '100'},
        {id: 2, name: 'Вторая книга', price: '200'}
    ]

    return (
        <div className='items'>
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
};

export default Products;

