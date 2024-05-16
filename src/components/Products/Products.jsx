import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import style from './Products.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/productsSlice';

const Products = () => {    
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const fetchItems = () => {
        axios.get('https://66336d32f7d50bbd9b495a65.mockapi.io/items').then(res => {
             dispatch(setProducts(res.data));
        });
    }

    useEffect(() => {
        fetchItems();
    }, []);

    // const AddProduct = () => {
    //     axios.post('https://66336d32f7d50bbd9b495a65.mockapi.io/items', {
    //         id: 9,
    //         title: 'Война и мир', 
    //         author: 'Толстой',
    //         }, 
    //         { 'contet-type' : 'application/jsion' },
    //     ).then((res) => {
    //         console.log(res.data);
    //         fetchItems();
    //     });
    // }
    
    return (
        <div className={style.contentProd}>
            {/* <button onClick={AddProduct}>ADD</button> */}
            <h1>Каталог</h1>
            <div className={style.items}>
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))} 
            </div>
        </div>
    );
};

export default Products;

