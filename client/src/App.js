import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Shop from './pages/Shop/Shop';
import Layout from './utlis/Layout/Layout';



function App() {
  return (
    <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
    </div>
  );
}

export default App;
