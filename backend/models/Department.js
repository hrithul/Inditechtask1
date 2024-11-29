const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  department_name: { type: String, required: true },
  emp_designation: { type: String, required: true },
  emp_salary: { type: Number, required: true }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
