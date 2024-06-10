import React, { useState } from 'react';
import style from './CartItem.module.css';
import deletion from '../../assets/img/deletion.svg';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


const CartItem = ({id, title, author, description, image}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickDelete = () => {
      dispatch(deleteItem({ id }));
  };

  const BookTextPage = () => navigate('/Books_pdf');

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
      <p className={style.title}>{title}</p>
      <p className={style.author}>{author}</p>
      <button 
        className={style.button} 
        onClick={BookTextPage}
      >
        Открыть книгу
      </button>
    </div>
  );
};

export default CartItem
