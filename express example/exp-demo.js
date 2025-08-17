import express from "express"
const app = express();

import dotenv from "dotenv"; //esc convention
dotenv.config();
const port = process.env.PORT || 8000

app.get('/', (req, res) =>{
    res.send('Hello World!');
});

app.get('/api/about', (req, res) =>{
    res.send([1, 5, 8]);
});

app.get('/api/about/:id', (req,res)=>{
    res.send(req.params.id);
});

//query string params handling
app.get('/api/posts/:year/:month', (req,res)=>{
    res.send(req.query);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));