const express = require("express");
const router = express.Router();

const user = require("../model/user");    //  one to one 
const career = require("../model/career");

router.post("/onesave", async (req, res) => {
    const { name, email, job, position } = req.body;

    // first save in user model
    const usermodel = await user.create({ name, email })

    // then save in career model with user created Id
    const carrermodel = await career.create({
        job,
        position,
        userid: usermodel._id
    })

    res.json({ msg: "one to one save", usermodel, carrermodel });
})

router.get("/onedisplay", async (req, res) => {
    const showdata = await career.find().populate("userid");
    
    res.json({ showdata, msg: "ok got all one to one data from model by populated key." }); 
})


module.exports = router;

