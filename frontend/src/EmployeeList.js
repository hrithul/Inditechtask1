import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.employee_id}>
            {employee.employee_name} - {employee.emp_email}
            <Link to={`/update-employee/${employee.employee_id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
