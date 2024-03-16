const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MogngoDB Connected")
    })
    .catch((err) => console.log(err));

app.listen(3000,() => {
    console.log(`Server is running on port 3000`);
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((error,req,res) => {
    const statusCode = error.statusCode || 500;
    const message = error.message ||'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})
