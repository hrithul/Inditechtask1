import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import DepartmentPage from './DepartmentPage';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';
import './App.css'
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<DepartmentPage />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/update-employee/:id" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
