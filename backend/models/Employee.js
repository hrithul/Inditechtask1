const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employee_id: { type: String, required: true, unique: true },
    employee_name: { type: String, required: true },
    emp_address: { type: String, required: true },
    contact_no: { type: String, required: true },
    emp_email: { type: String, required: true, unique: true },
    department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
});

module.exports = mongoose.model('Employee', employeeSchema);
