import './App.css';
import Hello from './components/Intro';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs'
import { Route,Routes } from 'react-router-dom';
import OtherPage from './components/OtherPage';
import Axios from './components/Axios'
import AxiosPost from './components/AxiosPost';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Hello></Hello>}/>
        <Route path="/About" element={<AboutUs></AboutUs>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/OtherPage" element={<OtherPage></OtherPage>}/>
        <Route path="/GetData" element={<Axios></Axios>}/>
        <Route path="/AxiosPost" element={<AxiosPost></AxiosPost>}></Route>
      </Routes>
    </div>
  );
}

export default App;
