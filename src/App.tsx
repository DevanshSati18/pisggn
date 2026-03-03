import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

// Import your page components (create these basic files in src/pages/)
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Ashram from './pages/Ashram';
import Gallery from './pages/Gallery';
import Infrastructure from './pages/Infrastructure';
import Admission from './pages/Admission';
import Academic from './pages/Academic';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      {/* Navbar sits here so it stays fixed on every page */}
      <Navbar />
      
      {/* Main content area where pages will render */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/ashram" element={<Ashram />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;