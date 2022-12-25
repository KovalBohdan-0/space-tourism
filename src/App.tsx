import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Crew from './components/Crew';
import Destination from './components/Destination';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Technology from './components/Technology';
import './styles/App.scss';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState<string>();
 
  return (
    <div className="App">
      <Navbar currentRoute={currentRoute} setCurrentRoute={setCurrentRoute}/>
      <Routes>
        <Route path="*" element={<Home setCurrentRoute={setCurrentRoute}/>}/>
        <Route path="home" element={<Home setCurrentRoute={setCurrentRoute}/>}/>
        <Route path="destination" element={<Destination />}/>
        <Route path="crew" element={<Crew />}/>
        <Route path="technology" element={<Technology />}/>
      </Routes>
    </div>
  )
}

export default App
