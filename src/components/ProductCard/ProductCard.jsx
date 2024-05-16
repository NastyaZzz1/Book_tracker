import React, {useState} from 'react';
import style from './ProductCard.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

const ProductCard = ({id, title, author, description, image}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const onClickAdd = () => {
    dispatch(addItem({ id, title, author, description, image}));
  };

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
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className={style.item}>
    
      <Image/>
      <p className={style.title}>{title}</p>
      <p className={style.author}>{author}</p>
      <button onClick={onClickAdd} className={style.button}>Читать</button>
    </div>
  );
} 

export default ProductCard;