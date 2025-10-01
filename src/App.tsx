import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import KeyboardNavigation from './components/KeyboardNavigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <KeyboardNavigation>
          <div className='min-h-screen bg-gray-50'>
            <ScrollIndicator />
            <Header />
            <main role='main' id='main-content'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </KeyboardNavigation>
      </Router>
    </HelmetProvider>
  );
}

export default App;
