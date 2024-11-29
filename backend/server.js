const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes'); 
const departmentRoutes = require('./routes/departmentRoutes'); 

dotenv.config();


const app = express();


app.use(cors()); 
app.use(express.json());

connectDB();


app.use('/api/employees', employeeRoutes); 
app.use('/api/departments', departmentRoutes); 

app.use('/api/admin', (req, res) => {
  res.send('Admin authenticated');
});


app.get('/', (req, res) => {
  res.send('Employee Management System API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
