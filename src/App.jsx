import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Maine from './pages/Maine/Maine';
import About from './pages/About/About';
import Otzivi from './pages/Otzivi/Otzivi';
import Tovari from './pages/Tovari/Tovari';
import Contact from './pages/Contact/contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/Maine" element={<Maine />} />
            <Route path="/about" element={<About />} />
            <Route path="/Otzivi" element={<Otzivi />} />
            <Route path="/Tovari" element={<Tovari />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;