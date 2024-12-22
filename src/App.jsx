import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NavBarController from './components/NavBar/NavBarController';
import Footer from './components/Footer/Footer/Footer';

function App() {
  const location = useLocation();

  const navType = location.pathname === '/' ? 1 :
                  location.pathname === '/about' ? 2 :
                  location.pathname === '/contact' ? 3 : 0;

  return (
    <div className='wrapper'>
      <NavBarController type={navType} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
