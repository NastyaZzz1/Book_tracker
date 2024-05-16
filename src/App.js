import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Calendar from './components/Calendar/Calendar';
import Want_books from './components/My_books/Want_books';
import Books_read from './components/My_books/Read';
import Books_reading from './components/My_books/Reading';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/counterSlice'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/Calendar' element={<Calendar/>} />
        <Route path='/Reading' element={<Books_reading />} />
        <Route path='/Want_books' element={< Want_books/>} />
        <Route path='/Read' element={<Books_read />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
