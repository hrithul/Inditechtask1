const Department = require('../models/Department');

const createDepartment = async (req, res) => {
  try {
    const { department_name, emp_designation, emp_salary } = req.body;

    const newDepartment = new Department({
      department_name,
      emp_designation,
      emp_salary
    });

    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find(); // Fetch all departments
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getDepartmentById = async (req, res) => {
 
};

const updateDepartment = async (req, res) => {
 
};

const deleteDepartment = async (req, res) => {
 
};


module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment
};
