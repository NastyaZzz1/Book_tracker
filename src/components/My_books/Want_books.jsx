import React from 'react';
import style from './My_books.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { clearItems } from '../../redux/cartSlice';

const Want_books = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <p>Книги, которые давно хотят прочитать</p>
      <p>Добавлено -  <span>{items.length}</span></p>

      <button className={style.button} onClick={() => {
        dispatch(clearItems());
      }}>Удалить все</button>

      <div className={style.items}>
        {items.map((obj) => (
          <CartItem key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  )
}

export default Want_books
