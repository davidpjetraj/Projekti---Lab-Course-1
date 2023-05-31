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
    // Get all users
    app.get('/users', (req, res) => {
        const q = "SELECT * FROM users"
        db.query(q, (err,data) => {
            if(err) return res.json(err)
            return  res.json(data)
        })
    });
    
    app.post("/users", (req,res)=>{
        const q = "INSERT INTO users ('name', 'email', 'password') VALUES (?)";
        const values = [  
            req.body.name,
            req.body.email,
            req.body.password
            ]
        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json("Users has been created sucessfully");
        });
    });

    app.post('/users/:id', (req, res) => {
        const { id } = req.params;
      
        const sql = 'DELETE FROM users WHERE id = ?';
        const values = [id];
      
        db.query(sql, values, (err, result) => {
          if (err) {
            console.error('Error deleting user:', err);
            res.send({ status: 'error' });
          } else {
            if (result.affectedRows > 0) {
              res.send({ status: 'ok' });
            } else {
              res.send({ status: 'not_found' });
            }
          }
        });
      });

    // app.delete("/users/:id", (req,res)=>{
    //     const userId = req.params.id;
    //     const q = "DELETE FROM users WHERE id = ?";

    //     db.query(q,[userId], (err,data)=>{
    //         if (err) return res.json(err);
    //         return res.json("Users has been deleted sucessfully.");
    //     })
    // })

    app.put("/users/:id", (req,res)=>{
        const userId = req.params.id;
        const q = "UPDATE users SET 'name' = ?, 'email' = ?, 'password' = ? WHERE  id = ?";

        const values = [  
            req.body.name,
            req.body.email,
            req.body.password
            ]

        db.query(q,[...values,userId], (err,data)=>{
            if (err) return res.json(err);
            return res.json("Users has been updated sucessfully.");
        })
    })
   
        // Get all products
        app.get('/products', (req, res) => {
            const q = "SELECT * FROM products"
            db.query(q, (err,data) => {
                if(err) return res.json(err)
                return  res.json(data)
            })
        });
        
        app.post("/products", (req,res)=>{
            const q = "INSERT INTO products ('barkodi', 'emriProduktit', 'llojiProduktit', 'sasia', 'cmimiBlerjes', 'cmimiShitjes', 'shuma') VALUES (?)";
            const values = [  
                req.body.barkodi,
                req.body.emriProduktit,
                req.body.llojiProduktit,
                req.body.sasia,
                req.body.cmimiBlerjes,
                req.body.cmimiShitjes,
                req.body.shuma
                ]
            db.query(q, [values], (err, data) => {
                if (err) return res.json(err);
                return res.json("Products has been created sucessfully");
            });
        });
    
        app.delete("/products/:id", (req,res)=>{
            const userId = req.params.id;
            const q = "DELETE FROM products WHERE id = ?";
    
            db.query(q,[productId], (err,data)=>{
                if (err) return res.json(err);
                return res.json("Products has been deleted sucessfully.");
            })
        })
    
        app.put("/products/:id", (req,res)=>{
            const productId = req.params.id;
            const q = "UPDATE products SET 'barkodi' = ?, 'emriProduktit' = ?, 'llojiProduktit' = ?, 'sasia' = ?, 'cmimiBlerjes' = ?, 'cmimiShitjes' = ?, 'shuma' = ?";
    
            const values = [  
                req.body.barkodi,
                req.body.emriProduktit,
                req.body.llojiProduktit,
                req.body.sasia,
                req.body.cmimiBlerjes,
                req.body.cmimiShitjes,
                req.body.shuma
                ]
    
            db.query(q,[...values,productId], (err,data)=>{
                if (err) return res.json(err);
                return res.json("Products has been updated sucessfully.");
            })
        })


        // Get all fatura
        app.get('/fatura', (req, res) => {
            const q = "SELECT * FROM payments"
            db.query(q, (err,data) => {
                if(err) return res.json(err)
                return  res.json(data)
            })
        });
        
        app.post("/fatura", (req,res)=>{
            const q = "INSERT INTO payments ('nrFatures', 'shuma', 'dataFatures') VALUES (?)";
            const values = [  
                req.body.nrFatures,
                req.body.shuma,
                req.body.dataFatures
                ]
            db.query(q, [values], (err, data) => {
                if (err) return res.json(err);
                return res.json("Payments has been created sucessfully");
            });
        });
    
        app.delete("/fatura/:id", (req,res)=>{
            const paymentId = req.params.id;
            const q = "DELETE FROM payments WHERE id = ?";
    
            db.query(q,[paymentId], (err,data)=>{
                if (err) return res.json(err);
                return res.json("Payments has been deleted sucessfully.");
            })
        })
    
        app.put("/fatura/:id", (req,res)=>{
            const paymentId = req.params.id;
            const q = "UPDATE payments SET 'nrFatures' = ?, 'shuma' = ?, 'dataFatures' = ?";
    
            const values = [  
                req.body.nrFatures,
                req.body.shuma,
                req.body.dataFatures
                ]
    
            db.query(q,[...values,paymentId], (err,data)=>{
                if (err) return res.json(err);
                return res.json("Payments has been updated sucessfully.");
            })
        })


    // Get a user by ID
    // app.get('/users/:id', (req, res) => {
    //     const userId = req.params.id;
    //     db.query('SELECT * FROM users WHERE id = ?', userId, (err, results) => {
    //     if (err) {
    //         throw err;
    //     }
    //     if (results.length === 0) {
    //         res.status(404).json({ message: 'User not found' });
    //     } else {
    //         res.json(results[0]);
    //     }
    //     });
    // });

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

    // app.post('/register', (req, res)=> {
    //     const sentName = req.body.Name
    //     const sentEmail = req.body.Email
    //     const sentPassword = req.body.Password

    //     const SQL = 'INSERT INTO users (name, email, password) VALUES (?,?,?)'

    //     const Values = [sentName, sentEmail, sentPassword]
        
    //     db.query(SQL, Values, (err, results)=>{
    //         if(err){
    //             res.send(err)
    //         }
    //         else{
    //             console.log('User created successfully')
    //             res.send({message: "User added!"})
    //         }
    //     });
    // });

    // Update a user by ID
    // app.put('/users/:id', (req, res) => {
    //     const userId = req.params.id;
    //     const { name, username, email, password, role } = req.body;
    //     db.query(
    //     'UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?',
    //     [name, email, password, role, userId],
    //     (err) => {
    //         if (err) {
    //         throw err;
    //         }
    //         res.json({ message: 'User updated successfully' });
    //     }
    //     );
    // });


    // app.post('/delete/users/:id', (req, res) => {
    //     const { id } = req.params;
      
    //     const sql = 'DELETE FROM users WHERE id = ?';
    //     const values = [id];
      
    //     db.query(sql, values, (err, result) => {
    //       if (err) {
    //         console.error('Error deleting user:', err);
    //         res.send({ status: 'error' });
    //       } else {
    //         if (result.affectedRows > 0) {
    //           res.send({ status: 'ok' });
    //         } else {
    //           res.send({ status: 'not_found' });
    //         }
    //       }
    //     });
    //   });

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


   app.listen(3001, () => {
    console.log('running server');
 });