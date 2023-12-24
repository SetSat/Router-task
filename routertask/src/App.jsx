import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Allcourse from './Allcourse';
import Fsd from './Fsd';
import Datascience from './Datascience';
import Cybersecurity from './Cybersecurity';
import Career from './Career';
import Navbar from './Navbar';

function App() {
  

  return (
   <div>
    <h1>React Routing</h1>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Allcourse></Allcourse>}  />
        <Route path="/fsd" element={<Fsd></Fsd>} />
        <Route path="/datascience" element={<Datascience></Datascience>} />
        <Route path="/cybersecurity" element={<Cybersecurity></Cybersecurity>}/>
        <Route path="/career" element={<Career></Career>} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
