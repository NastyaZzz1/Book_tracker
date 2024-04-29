import React, {useState} from 'react';

const ProductCard = ({name, price}) => {
  const [value, setValue] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const onClickAdd = () => {
    setValue(value + 1);
  };

  return (
    <div className="item">
      <img 
        className="image" 
        src="https://zabavniki.club/wp-content/uploads/open_book_31_12174654.jpg"
      />
      <p>{name}</p>
      <p>{price} руб.</p>
      <div className='counter'>
        <p>{value}</p>
        <button onClick={onClickAdd}>+</button>
        <button 
          onClick={() => {
            setIsShow(!isShow);
          }}>
          {isShow ? <p>Скрыть описание</p> : <p>Показать описание</p>}    
        </button>
        {isShow && <p>Очень интересная книга</p>}
      </div>
    </div>
  );
}

export default ProductCard;