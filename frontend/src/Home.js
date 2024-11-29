import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeList from './EmployeeList';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Home;
