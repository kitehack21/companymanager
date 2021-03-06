const express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql');
const moment = require('moment');

var app = express();
const port = 1994;
var url = bodyParser.urlencoded({extended:false})
const cors = require('cors');
app.use(cors())

app.set('view engine' , 'ejs');
app.use(url)
app.use(bodyParser.json())

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '031998',
    database : 'companymanager',
    port: 3306
    });

app.get('/companies', function(req,res){
    console.log(req.query)
    var sql = `SELECT * FROM companies`
    conn.query(sql, (err,results)=>{
        if(err) throw err;
        console.log(results)
        console.log("Get Companies Success")
        res.send(results);
    })
})

app.post('/companies', function(req,res){
    var sql = `INSERT INTO companies SET ?`

    conn.query(sql, req.body, (err,results)=>{
        if(err){
            res.send(err)
            throw err
        }
        console.log(results)
        console.log("Create Company Success")
        res.send({code: 400, status:"Create Company Success"});
    })
})

app.delete('/companies/:id', function(req,res){
    var sql = `DELETE FROM companies WHERE id = ${req.params.id}`

    conn.beginTransaction(function(err){
        if(err) {throw err;}
        conn.query(sql, (err, results)=>{
            console.log(results)
            if(err){
                conn.rollback(function(){
                    console.log("Rollback Succesful1")
                    throw err
                })
            }
            sql = `DELETE FROM offices WHERE companyId = ${req.params.id}`
            conn.query(sql, (err1, results1) => {
                if(err1){
                    conn.rollback(function(){
                        console.log("Rollback Succesful2")
                        throw err1
                    })
                }
                conn.commit(function(err2){
                    if (err2){
                        conn.rollback(function(){
                            console.log("Rollback Succesful3")
                            throw err2;
                        })
                    }
                    res.send({code: 400, status:"Delete Company Success"})
                    console.log("Delete companies and subsequent offices succesful")
                })
            })
        })
    })
})

app.get('/offices', function(req,res){
    var sql = `SELECT * FROM offices`
    conn.query(sql, (err,results)=>{
        if(err) throw err;
        console.log(results)
        console.log("Get Offices Success")
        res.send(results);
    })
})

app.post('/offices', function(req,res){
    var sql = `INSERT INTO offices SET ?`

    conn.query(sql, req.body, (err,results)=>{
        if(err){
            res.send(err)
            throw err
        }
        console.log(results)
        console.log("Create Office Success")
        res.send({code: 400, status:"Create Office Success"});
    })
})

app.delete('/offices/:id', function(req,res){
    var sql = `DELETE FROM offices WHERE id = ${req.params.id}`

    conn.query(sql, (err,results)=>{
        if(err){
            res.send(err)
            throw err
        }
        console.log(results)
        console.log("Delete Office Success")
        res.send({code: 400, status:"Delete Office Success"});
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));