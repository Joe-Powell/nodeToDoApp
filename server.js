const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use(express.static(path.join(__dirname, 'css')));
app.set("view engine", "ejs");



const Comments = require('./schema/schemaModel');
require('dotenv/config');


const mongoose = require('mongoose');

mongoose.connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

}, () => {
    console.log('connected to db');
})







app.get('/', function (req, res) {
    res.render('index')

})

app.get('/load', async (req, res) => {
    const posts = await Comments.find().sort({ _id: -1 }); // sorts newest on top
    res.json({ posts: posts })

})

app.post('/submit', async (req, res) => {
    console.log(req.body.comment)

    await Comments.create({
        comments: req.body.comment
    })

    const posts = await Comments.find().sort({ _id: -1 }); // sorts newest on top
    res.json({ posts: posts })

})

app.delete('/delete', async (req, res) => {
    await Comments.deleteOne({ _id: req.body.id })

    const posts = await Comments.find().sort({ _id: -1 }); // sorts newest on top
    res.json({ posts: posts })
})

app.patch('/update', async (req, res) => {
    console.log(req.body.id)

    await Comments.updateOne(
        { _id: req.body.id },
        { $set: { comments: req.body.nameToEdit } }
    );


})












//  array methods ---------------------------------------------
// map
// const arr1 = ['apple', 'orange', 'peach', 'grape'];

// const mappedArr1 = arr1.map((item) => {
//     return item + 's';
// })
// console.log(mappedArr1.join())



// forEach
// list = [1, 2, 3, 4, 5, 6]

// list.forEach(x => console.log(x * 2))
// -------------------------------------------------


















app.listen(PORT, console.log(`Server started on port http://localhost:${PORT}`));
