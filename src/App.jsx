import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { About } from './components/about/About'
import { Home } from './components/home/Home'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Services } from './components/services/Services';
import { Shop } from './components/shop/Shop';
import  Blog  from './components/blog/Blog';

function App() {

  const location = useLocation();

  // Define the page where you want to hide the footer
  const hideFooterOn = ["/services"];

  return (
    <>
    
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      </div>
      {!hideFooterOn.includes(location.pathname) && <Footer />}
    
    </>
  )
}

export default App
