// import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Products from './components/Products';
// import logo from './assets/img/logo.png';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className='logo' /> */}
      <Header />
      <Products/>
    </div>
  );
}


export default App;
