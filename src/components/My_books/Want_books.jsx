import React from 'react';
import style from './Want_books.module.css';
import { Link } from 'react-router-dom';
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
    <div className={style.contentBook}>
      <h1>Мои книги</h1>
      <nav>
        <ul>
          <Link to='/Want_books'>Хочу прочитать</Link>
        </ul>
        <ul>
          <Link to='/Reading'>Читаю сейчас</Link>
        </ul>
        <ul>
          <Link to="/Read">Прочитано</Link>
        </ul>
      </nav>
      <p>Книги, которые давно хотят прочитать</p>
      <p>Добавлено <span>{items.length}</span></p>

      <div className={style.items}>
        {items.map((obj) => (
          <CartItem key={obj.id} {...obj} />
        ))}
      </div>
      
      <button onClick={() => {
        dispatch(clearItems());
      }}>Clear</button>
    </div>
  )
}

export default Want_books
