import React from 'react';
import './App.css';
import './index.css';
import Resume from './components/Resume';
import { ThemeContext } from './themeContext';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const themeContext = React.useContext(ThemeContext);

  return (
    <div className=''
      style={{
        backgroundColor: themeContext?.theme.colors.secondary,
        color: themeContext?.theme.colors.primary
      }}>
      <div className="block p-1 max-w-[700px] mx-auto mb-5">
        <Navbar />
        <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default App;
