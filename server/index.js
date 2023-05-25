const express = require('express');
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
    cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    })
);

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'possystem',
 });

    app.post('/register', (req, res)=> {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        db.query(
        'INSERT INTO users (username, email, password) VALUES (?,?,?)',
        [username, email, password],
        (err, result)=> {
        console.log(err);
        }
    );
 });


   app.post('/login', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
    
        db.query(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [username, password],
            (err, result)=> {
                if (err) {
                    res.send({err: err});
                }
        
                if (result.length > 0) {
                    res.send( result);
                    }else({message: "Wrong username/password comination!"});
                }            
        );
   });

   app.listen(3001, () => {
    console.log('running server');
 });