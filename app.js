const express = require('express');
require('./db/connect');

const Student = require('./models/student');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get ('/',(req,res) => {
    res.send('get method call by me...????>>>> Aiket')
})

// create a new data....


app.post('/student',(req,res) => {

    const studentData = new Student(req.body)
    console.log(req.body);

    studentData.save().then(() => {
        res.status(201).send(studentData);
    }).catch((e) => {
        res.status(400).send(e);
    })

})

app.listen(port, () =>{
    console.log(`connection set in ${port}`);
})

