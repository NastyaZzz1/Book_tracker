import React, { useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import style from './Products.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/productsSlice';

const Products = () => {    
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const fetchItems = async () => {
        try{
            const res = await axios.get('https://66336d32f7d50bbd9b495a65.mockapi.io/items');
            dispatch(setProducts(res.data));
        } catch (error){
            console.log(error);
        }
    }
 
    useEffect(() => {
        fetchItems();
    }, []);
    
    return (
        <div className={style.contentProd}>
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

