import './App.css';
// import Hero from './Components/Hero';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';

export default function App() {
  
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Recipes" element={<Recipes/>} />
      <Route path="/Shop" element={<Shop/>} />
      <Route path="/Contact" element={<Contact/>} />
     </Routes>
    </div>
    
  );
}



