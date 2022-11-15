import HomePage  from'./pages/HomePage';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Orders from './pages/Orders';
import Help from './pages/Help';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='cart' element={<Cart />} />
        <Route path='account' element={<Account />} />
        <Route path='orders' element={<Orders />} />
        <Route path='help' element={<Help/>} />
      </Routes>
    </div>
  );
}

export default App;
