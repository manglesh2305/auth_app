const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

module.exports.signup = async (req, res, next) => {
    //console.log(req.body);
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({ username, email, hashedPassword});
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch(error) {
        next(error);
    }
    
}