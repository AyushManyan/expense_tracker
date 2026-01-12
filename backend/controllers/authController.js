const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
}

// register User

exports.registerUser = async (req, res) => {
    const { fullName, email, password,profileImageUrl } = req.body;

    // validation hcekt for missing fields
    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "Please fill all required fields" });
    }
    console.log("Registering user with email:", email);
    try {
        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // create new user
        const user = await User.create({ fullName, email, password, profileImageUrl });
        console.log("User registered:", user);
        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// login User
exports.loginUser = async (req, res) => {};


// get User Info
exports.getUserInfo = async (req, res) => {};
