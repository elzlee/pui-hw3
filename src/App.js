import logo from './logo.svg';
import './App.css';
import ProductCard from './views/home/productCard';

function App() {
  return (
    /* (2) Update App.js to only return the homepage component. */
    <div className="App">
      <header className="App-header">

        <ProductCard />
        
      </header>
    </div>
  );
}

export default App;

//only return the homepage component from index.js
