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
