import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Partners from './pages/Partners';
import Partner from './pages/Partner';
import Contact from './pages/Contact';
import HelpDesk from './pages/HelpDesk';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/partner/:name" element={<Partner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/helpdesk" element={<HelpDesk />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;