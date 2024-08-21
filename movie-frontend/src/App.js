import './App.css';
import Navbar from './component/navbar';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './page/home';
import Features from './page/features';

import AddMovie from './page/admin';
function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><HomePage /></>} />
        <Route path="/features" element={<><Navbar /><Features /></>} />
        <Route path="/admin" element={<AddMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
