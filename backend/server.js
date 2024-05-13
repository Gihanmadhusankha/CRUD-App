const express = require("express");
const cors = require("cros");
const mysql =require("mysql");

const app=express();

app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"

})
app.get("/",(req,res) =>{
    const sql ="SELECT * FROM student";
    db.query(sql,(err,data) => {
        if(err) return res.json("Eroor");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening") ;  
})