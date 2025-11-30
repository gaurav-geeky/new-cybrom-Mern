
const express = require("express");
const router = express.Router();

const authorModel = require("../model/author");
const bookModel = require("../model/book");


router.post("/manysave", async (req, res) => {
    console.log(req.body);
    const { authorname, email, bookname, price } = req.body;

    const authordata = await authorModel.create({ authorname, email });

    const bookdata = await bookModel.create({
        bookname,
        price,
        authorId: authordata._id
    });

    await authorModel.findByIdAndUpdate(authordata._id,
        { $push: { booksId: bookdata._id } });

    res.json("ok data save in many relation !");
})

router.get("/displaymany", async (req, res) => {
    const authordata = await authorModel.find().populate("booksId")
    res.json({ authordata, msg: "ok many display!" });
})

router.post("/addbook", async (req, res) => {
    console.log(req.body);
    const { authid, bookname, price } = req.body;

    const mybook = await bookModel.create({
        bookname: bookname,
        price: price,
        authorId: authid
    });

    // now update in author using id as author have key consists array of book . so add new book; 
    await authorModel.findByIdAndUpdate(authid, { $push: { booksId: mybook._id } });

    const author = await authorModel.findById(authid);

    res.json({ msg: `okk book added in author ${author.authorname} ` });
})

router.get("/displaybooks", async (req, res) => {
    const books = await bookModel.find().populate("authorId");
    res.json({ msg: "got data by books", books });
})


module.exports = router;



