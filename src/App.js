import NaviBar from './components/NaviBar/NaviBar.js';
import Introduction from './components/Introduction/Introduction.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Hobbies from './components/Hobbies/Hobbies.js';
import Education from './components/Education/Education.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';

function App() {
  return (
    <div className="app-shell">
      <NaviBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
