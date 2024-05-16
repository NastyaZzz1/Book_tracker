import React from 'react';
import style from './CartItem.module.css';
import deletion from '../../assets/img/deletion.svg';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/cartSlice';


const CartItem = ({id, title, author, image}) => {
    const dispatch = useDispatch();
    const onClickDelete = () => {
        dispatch(deleteItem({ id }));
    };
  return (
    <div className={style.item}>
        <input onClick={onClickDelete} type="image" src={deletion}></input>
        {/* <img src={image} className={style.image} /> */}
        <p>{title}</p>
        <p>{author}</p>
    </div>
  );
};

export default CartItem
