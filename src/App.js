import { Routes,Route, useLocation } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Education from './containers/resume';
import Projects from './containers/portfolio';
import Skills from './containers/skills';
import './App.scss';
import NavBar from './components/nav-bar';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import Background from './utilsjs/particles';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <title>{"Niladri: Portfolio"}</title>
      <NavBar />
      <div className='App-main-page-content'>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
