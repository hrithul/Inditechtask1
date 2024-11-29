import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateEmployee = ({ match }) => {
  const [employee, setEmployee] = useState({
    employee_id: '',
    employee_name: '',
    emp_address: '',
    contact_no: '',
    emp_email: '',
    department_id: ''
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`http://localhost:5000/api/employees/${match.params.id}`);
      setEmployee(res.data);
    };
    fetchEmployee();
  }, [match.params.id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/employees/${employee.employee_id}`, employee)
      .then(response => {
        alert('Employee updated successfully!');
      })
      .catch(error => {
        console.error('Error updating employee:', error);
      });
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        {}
        <input
          type="text"
          name="employee_name"
          value={employee.employee_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="emp_address"
          value={employee.emp_address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact_no"
          value={employee.contact_no}
          onChange={handleChange}
        />
        <input
          type="email"
          name="emp_email"
          value={employee.emp_email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department_id"
          value={employee.department_id}
          onChange={handleChange}
        />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
