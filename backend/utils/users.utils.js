const asyncHandler = require("express-async-handler");
const User = require("../models/users.model");
const { generateToken } = require("./generateToken");


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400)
        throw new Error("User already Exists")
    }
    const user = await User.create({
        name, email, password, pic
    })
    if (user) {
        const { _id, name, email, isAdmin, pic } = user;
        res.status(201).json({ _id, name, email, isAdmin, pic, token: generateToken(user._id) })
    }
    else {
        res.status(400);
        throw new Error("Error Occured")
    }


})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

module.exports = { registerUser, authUser }