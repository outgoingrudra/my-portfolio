import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';

const Home         = lazy(() => import('./pages/Home'));
const About        = lazy(() => import('./pages/About'));
const Projects     = lazy(() => import('./pages/Projects'));
const Certificates = lazy(() => import('./pages/Certificates'));
const Contact      = lazy(() => import('./pages/Contact'));
const ErrorPage    = lazy(() => import('./pages/ErrorPage'));

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ background: '#04070f' }}>
        <Navbar />
        <div className="pt-16">
          <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
            <Routes>
              <Route path="/"             element={<Home />}         />
              <Route path="/about"        element={<About />}        />
              <Route path="/projects"     element={<Projects />}     />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact"      element={<Contact />}      />
              <Route path="*"             element={<ErrorPage />}    />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;