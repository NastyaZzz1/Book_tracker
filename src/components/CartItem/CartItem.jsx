import React, { useState } from 'react';
import style from './CartItem.module.css';
import deletion from '../../assets/img/deletion.svg';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/cartSlice';


const CartItem = ({id, title, author, description, image}) => {
  const dispatch = useDispatch();
  const onClickDelete = () => {
      dispatch(deleteItem({ id }));
  };

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const styles = {
    image: {
    filter: isHovered ? "brightness(50%)" : "none",
    }
  };
  
  const Image = () => {
    return (
      <article className={style.article} >
        <div className={style.background} ></div>
        <img 
          className={style.image}
          style = {styles.image}
          src={image} />
        {isHovered && <p className={style.text}>{description}</p>}
        </article>
    );
  };

  return (
    <div 
      className={style.item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <input 
        className={style.deletionButton} 
        onClick={onClickDelete} 
        type="image" 
        src={deletion}>
      </input>
      <Image />
      <p>{title}</p>
      <p>{author}</p>
      <button className={style.button}>Открыть книгу</button>
    </div>
  );
};

export default CartItem
