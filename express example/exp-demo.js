import Joi from "joi";

import express, { response } from "express";
const app = express();
app.use(express.json()); //middleware

import dotenv from "dotenv"; //esc convention
dotenv.config();
const port = process.env.PORT || 8000

const courses = [{ id : 1, name: 'course1'},
    { id : 2, name: 'course2'},
    { id : 3, name: 'course3'}
];

app.get('/', (req, res) =>{
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

// app.get('/api/courses/:id', (req,res)=>{
//     res.send(req.params.id);
// });

//query string params handling
app.get('/api/posts/:year/:month', (req, res)=>{
    res.send(req.query);
});
//http://localhost:3000/api/posts/2018/3?sortBy=name -> Query string params: for optional


// app.get('/api/courses/:id', (req,res)=>{
//     const course = courses.find(c => c.id === parseInt(req.params.id)); //req.params.id returns string so need to convernt into int using parseInt
//     if(!course) res.status(404).send('Course with given ID was not found');
//     res.send(course);
// });

app.post('/api/courses', (req, res)=>{
    const schema = {
        name: Joy.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    //console.log(result);
    
    //INPUT verification
    // if (!req.body.name || req.body.name.length < 3){
    //     //400 -> bad request
    //     res.status(400).send('Name is required and needs to be minimum 3 length');
    //     return;
    // }

    if (result.error){
         //400 -> bad request
         res.status(400).send(result.error.details[0].message);
        return;
     }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course); //returns new obj to client
});


app.listen(port, ()=> console.log(`Listening on port ${port}`));