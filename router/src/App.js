import './App.css';
import Hello from './components/Intro';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs'
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Hello></Hello>}/>
        <Route path="/About" element={<AboutUs></AboutUs>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
      </Routes>
    </div>
  );
}

export default App;
