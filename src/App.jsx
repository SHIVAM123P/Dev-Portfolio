import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Blog } from './components';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Optionally save the user's preference in localStorage or cookies here
  };

  useEffect(() => {
    // Check local storage or cookies for saved preference
    // Example: const savedDarkMode = localStorage.getItem('darkMode');
    // if (savedDarkMode !== null) {
    //   setDarkMode(JSON.parse(savedDarkMode));
    // }
    // For demo purpose, I'm leaving it default to true (dark mode)
  }, []);

  return (
    <BrowserRouter>
      <div className={`font-sans ${darkMode ? 'bg-dark-100 text-light' : 'bg-white text-black'}`}>
        <div className={`${darkMode ? 'bg-dark-200' : 'bg-hero-pattern'} bg-cover bg-no-repeat bg-center min-h-screen`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
        </div>
        <About />
        <Blog darkMode={darkMode} /> {/* Pass darkMode prop to Blog component */}
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative'>
          <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
