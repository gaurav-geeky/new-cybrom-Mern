
const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.get("/home", (req, res) => {
    res.json("hello homage of jwt..")
});

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const hashpass = await bcrypt.hash(password, 10);

    const user = await User.create({
        name: name,
        email: email,
        password: hashpass
    })
    res.json({ msg: "user registere ok..", user });
})


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json("invalid email !");

    const passValidate = await bcrypt.compare(password, user.password);

    if (!passValidate) return res.status(400).json("Invalid password !");

    console.log(` user: ${user} , has pass: ${passValidate}`)


    const token = jwt.sign({ id: user._id }, "gaur@123", { expiresIn: "1d" })
    res.json({ msg: `ok user ${user.name} logged in`, token, user })
})

router.get("/auth", async (req, res) => {

    const token = req.header("auth-token");

    if (!token) return res.status(400).json("No token is there..");
    console.log("req header : ", token);
    console.log("re headerssss : ", req.headers)

    try {
        const decode = await jwt.verify(token, "gaur@123");
        console.log("id whle making jwt token : ", decode.id);

        const user = await User.findById(decode.id).select("-password -email");
        console.log("user info without pass mail :: ", user); 
        res.status(200).json({msg: `${user.name}'s token verified..`, user});
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ msg: "Invalid or expired token" });
    }

});


module.exports = router; 