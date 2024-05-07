import './App.css';
import Hello from './components/Intro';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs'
import { Route,Routes } from 'react-router-dom';
import OtherPage from './components/OtherPage';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Hello></Hello>}/>
        <Route path="/About" element={<AboutUs></AboutUs>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/OtherPage" element={<OtherPage></OtherPage>}/>
      </Routes>
    </div>
  );
}

export default App;
