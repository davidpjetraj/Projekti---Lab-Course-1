// const express = require('express');
// const mysql = require("mysql2");
// const cors = require("cors");

import express from 'express'
import mysql  from  'mysql'
import cors from 'cors'
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'possystem',
 });

 db.connect((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Mysql connected...");
    }
  });

 app.get('/', (req, res) => {
    if(req.session.name) {
        return res.json({valid: true, name: req.session.name})
    } else {
        return res.json({valid: false})
    }
 })
    // app.post('/register',async (req, res)=> {
    //     const sql = "INSERT INTO users ('name', 'email', 'password') VALUES (?)";
    //     const values = [
    //         req.body.name,
    //         req.body.email,
    //         req.body.password
    //     ]
    //     db.query(sql, [values], (err, result) => {
    //         if(err) return res.json({Message: "Error in Node"});
    //         return res.json(result);
    //     })
    //  });

     app.post('/register',async (req, res)=> {
        const { name, email, password } = req.body;
        try{
    
        } catch (error){}
        console.log(name, email, password)
        db.query(
        'INSERT INTO users (name, email, password) VALUES (?,?,?)',
        [name, email, password],
        (err, result)=> {
            if(err) return res.json({Message: "Error in Node"});
            return res.json(result);        
        }
    );
    });

    app.post("/login", (req, res) => {
        const sql = "SELECT * FROM users WHERE name = ? and password = ?";
        db.query(sql, [req.body.name, req.body.password], (err, result) => {
            if(err) return res.json({Message: "Error inside server"});
            if (result.length > 0) {
                req.session.name = result[0].name;
                return res.json({Login: true, name: req.session.name})
            } else {
                return  res.json({Login: false})
            }
        })
    })



   app.post('/products/add-products', (req, res)=> {
    const barkodi = req.body.barkodi;
    const emriProduktit = req.body.emriProduktit;
    const llojiProduktit = req.body.llojiProduktit;
    const sasia = req.body.sasia;
    const cmimiBlerjes = req.body.cmimiBlerjes;
    const cmimiShitjes = req.body.cmimiShitjes;
    const tvsh = req.body.tvsh;
    const shuma = req.body.shuma;

    db.query(
    'INSERT INTO products (barkodi, emriProduktit, llojiProduktit, sasia, cmimiBlerjes, cmimiShitjes, tvsh, shuma) VALUES (?,?,?,?,?,?,?,?)',
    [barkodi, emriProduktit, llojiProduktit, sasia, cmimiBlerjes, cmimiShitjes, tvsh, shuma],
    (err, result)=> {
        if(err) return res.json({Message: "Error in Node"});
        return res.json(result);        
    }
);
});


   app.listen(3001, () => {
    console.log('running server');
 });