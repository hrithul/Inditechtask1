import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    employee_id: '',
    employee_name: '',
    emp_address: '',
    contact_no: '',
    emp_email: '',
    department_id: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:5000/api/employees', employee);
      console.log(response)
      if (response.status === 200) {
        alert('Employee added successfully!');
        setEmployee({
          employee_id: '',
          employee_name: '',
          emp_address: '',
          contact_no: '',
          emp_email: '',
          department_id: ''
        }); 
      }
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Failed to add employee');
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employee_id"
          placeholder="Employee ID"
          value={employee.employee_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="employee_name"
          placeholder="Employee Name"
          value={employee.employee_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="emp_address"
          placeholder="Employee Address"
          value={employee.emp_address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact_no"
          placeholder="Contact Number"
          value={employee.contact_no}
          onChange={handleChange}
        />
        <input
          type="email"
          name="emp_email"
          placeholder="Email"
          value={employee.emp_email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department_id"
          placeholder="Department ID"
          value={employee.department_id}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
