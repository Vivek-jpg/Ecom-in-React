import logo from './logo.svg';
import './components/navbar/navbar.css';
import './App.css';
import './components/herosection/CardComponent.css'
import { CardComponent } from './components/herosection/CardComponent';
import Navbar from './components/navbar/Navbar';
import { Heading } from './/components/BreackHeading/BreakHeading';
import './components/BreackHeading/BreakHeading.css';
import { Cardcategory } from './components/CardCateories/CardCategory';
import './components/CardCateories/CardCategory.css';
import { Footer } from './components/Footer/Footer';
import './components/Footer/Footer.css'
import { Login } from './Pages/Login';
import './components/Login/Login.css';
import { Product } from './components/Product/Product';
import './components/Product/Product.css';
import { CartPage } from './components/cartPage/cartPage';
import LandingPage from './Pages/LandingPage';
import { Route, Routes } from "react-router-dom";
import { Signin } from './components/SignIn/Signin';
import './components/SignIn/signin.css';
import { WishListpage } from './Pages/WishListpage';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
           <Route path="/product" element = {<Product/>}/>
            <Route path="/cartPage" element={<CartPage />} />
           <Route path="/signIn" element={<Signin />} />
          <Route path="/wishList" element={<WishListpage/>} />
        </Routes>
      </div>
  );
}

export default App;
