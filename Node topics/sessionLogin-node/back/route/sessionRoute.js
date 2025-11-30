const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User.js");

// Register
router.post("/register", async (req, res) => {
    console.log("Registeration detail : ", req.body);

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ msg: "All fields are required !" });
        }
        const exist = await User.findOne({ email });
        if (exist) return res.json({ msg: "Email already exists !" });

        const hashpass = await bcrypt.hash(password, 10);
        const newuser = await User.create({
            name, email, password: hashpass
        });

        res.json({ user: newuser, msg: "User has been Registered !" });

    } catch (err) {
        res.json({ error: err.message });
    }
});


// Login
router.post("/login", async (req, res) => {
    console.log("Login detail : ", req.body)

    try {
        const { password, email } = req.body;

        const myUser = await User.findOne({ email });
        if (!myUser) return res.json({ msg: "Invalid user email" });

        const checkpass = await bcrypt.compare(password, myUser.password);
        if (!checkpass) return res.json({ msg: "Invalid user password" });

        req.session.user = {
            id: myUser._id,
            name: myUser.name,
            email: myUser.email
        };
        const user = myUser.toObject();
        delete user.password;

        res.json({ msg: "User login success !", user });
    }
    catch (err) {
        res.json({ err: err.message })
    }
})

// authentication middleware
function isAuth(req, res, next) {
    if (!req.session.user) {
        return res.json({ msg: "Not logged in" });
    }
    next();
}


// Dashboard
router.get("/dashboard", isAuth, async (req, res) => {

    try {
         if (!req.session.user) {
            return res.json({ msg: "Not logged in" });
        }

        const userid = req.session.user.id;
        const user = await User.findById(userid).select("-password");

        if (!user) return res.json({ msg: "User not found !" });

        console.log("dashboard success", user);
        res.json({ user: user, msg: "User data found !" })
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: "Not logged in", error: error.message });
    }
});



// Logout
router.get("/logout", async (req, res) => {
    req.session.destroy(() => {
        res.json({ msg: "Logged out" });
    });
})


module.exports = router;

