import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  Routes,
  Route
} from "react-router-dom";
import Shop from './components/Shop';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';
function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
          <Route  exact path="/" element={<Home/>} />
          <Route exact path="/shop" element={<Shop/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/:products/:id" element={<Product/>} />
          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
          */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
