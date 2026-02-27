import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ background: '#04070f' }}>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/"             element={<Home />}         />
            <Route path="/about"        element={<About />}        />
            <Route path="/projects"     element={<Projects />}     />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact"      element={<Contact />}      />
            <Route path="*"             element={<ErrorPage />}    />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;