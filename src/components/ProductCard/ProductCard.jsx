import React, {useState} from 'react';
import style from './ProductCard.module.css';

const ProductCard = ({title, author, description}) => {
  // const [value, setValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // const onClickAdd = () => {
  //   setValue(value + 1);
  // };

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
      <article className={style.article}>
        <img 
          className={style.image}
          style = {styles.image} 
          // style="filter: brightness(50%);"
          src="https://zabavniki.club/wp-content/uploads/open_book_31_12174654.jpg"
        />
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
      <p>{title}</p>
      <p>{author}</p>
      <button className={style.button}>Читать</button>
      
      {/* <div className="counter">
        <p>{value}</p>
        <button onClick={onClickAdd}>+</button>
      </div> */}
    </div>
  );
} 

export default ProductCard;