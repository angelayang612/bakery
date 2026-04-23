import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Order from './pages/Order';
import NavBar from './components/NavBar';
import Buy from './pages/Buy'
import Products from './pages/Products'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
            <Routes>
              <Route 
                // route path
                path='/'
                // this is where you render 
                element={<Home />}
              />
              <Route 
                path='/order'
                element={<Order />}
              />
              <Route 
                path='/products'
                element={<Products />}
              />
              <Route 
                path='/buy' 
                element={<Buy />}
              />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
