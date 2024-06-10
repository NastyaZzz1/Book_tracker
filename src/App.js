import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Calendar from './components/Calendar/Calendar';
import Want_books from './components/My_books/Want_books';
import Books_read from './components/My_books/Read';
import Books_reading from './components/My_books/Reading';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Books_pdf from './components/Books_pdf/Books_pdf';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/Calendar' element={<Calendar/>} />
        <Route path='/Reading' element={<Books_reading />} />
        <Route path='/Want_books' element={< Want_books/>} />
        <Route path='/Read' element={<Books_read />} />
        <Route path='/Books_pdf' element={<Books_pdf />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
