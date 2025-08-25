import Joi from "joi";

import express from "express";
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
    //verification using joi -> new method
    const { error } = validateCourse(req.body); //same as result.error -> object destructuring

    // console.log(result);

    if (error){
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

//http put
app.put('/api/courses/:id', (req, res)=>{
    //look up course. if doesnt exist return 404.
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course with given ID was not found');

    //valdiate. if invalid return 400 - bad request.
    //const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); //same as result.error -> object destructuring

    // console.log(result);

    if (error){
         res.status(400).send(result.error.details[0].message);
         return;
    }

    //update course
    course.name = req.body.name;

    //return updated course to client
    res.send(course);
});

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}

app.listen(port, ()=> console.log(`Listening on port ${port}`));