var express = require("express");
var router = express.Router();
//使用環境參數
require("dotenv").config();
//
var mysql = require("mysql");
var conn = mysql.createConnection({
  host: process.env["dbhost"],
  user: process.env["dbuser"],
  password: process.env["dbpassword"],
  database: process.env["database"],
});

// 更新會員資料
// router.put("/", function (req, res, next) {
//   let { id: newsId } = req.params
// // update statment
// let sqlKey = `update member set 
//     email=?, 
//     password=?, 
//     member_name=?,  
//     member_phone=?, 
//     member_sex=?,
//     member_id=?,
//     member_aboutme=? where valid=1'`;

//     const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
//   //這樣寫才對
//   console.log('/ud1',obj);
  
//   conn.query(sqlKey,[], function (err, rows) {
//     if(err){
//         console.log(err);
//     }
//         res.send(JSON.stringify(rows));
//         });
    
// });



router.post("/:id", function (req, res, next) {
  console.log("udid:",req.params.newsId)
  let sqlKey = `update member set 
    email=?, 
    password=?, 
    member_name=?,  
    member_phone=?,
    member_sex=?,
    member_id=?,
    member_aboutme=? where newsId=${newsId}'`;
  //   email='${req.body.email}', 
  //   password='${req.body.password}', 
  //   member_name='${req.body.member_name}',  
  //   member_phone='${req.body.member_phone}',  
  //   birthday='${req.body.birthday}', 
  //   member_sex='${req.body.member_sex}',
  //   member_id='${req.body.member_id}',
  //   member_aboutme='${req.body.member_aboutme}' where newsid='${req.body.newsId}'`;
  const obj = JSON.parse(JSON.stringify(req.params)); // req.body = [Object: null prototype] { title: 'product' }
  //這樣寫才對
  console.log('/ud2',obj);
  
  conn.query(sqlKey,[], function (err, rows) {
    if(err){
        console.log(err);
    }
        res.send(JSON.stringify(rows));
        });
    
});

// router.put("/:id", function (req, res, next) {
//   console.log('ud2:',req.params.newsId)

//   // let sqlKey = `update member set 
//   // email='${req.body.email}', password='${req.body.password}' where id='${id}'`;
//   let sqlKey = `update member set 
//     email='${req.params.email}', 
//     password='${req.params.password}', 
//     member_name='${req.params.member_name}',  
//     member_phone='${req.params.member_phone}',  
//     birthday='${req.params.birthday}', 
//     member_sex='${req.params.member_sex}',
//     member_id='${req.params.member_id}',
//     member_aboutme='${req.params.member_aboutme}' where newsid='${req.params.newsId}'`;
// conn.query(sqlKey,[], function (err, rows) {
//   if(err){
//       console.log(err);
//   }
//       res.send(JSON.stringify(rows));
//       });
  
// });

// router.put("/member/", function (req, res, next) {
//     console.log(req.body.newsid)
//     let sqlKey = `update member set 
//       email='${req.body.email}', 
//       password='${req.body.password}', 
//       member_name='${req.body.member_name}',  
//       member_phone='${req.body.member_phone}',  
//       birthday='${req.body.birthday}', 
//       member_sex='${req.body.member_sex}',
//       member_id='${req.body.member_id}',
//       member_aboutme='${req.body.member_aboutme}' where newsid='${req.body.newsid}'`;
//   conn.query(sqlKey,[], function (err, rows) {
//     if(err){
//         console.log(err);
//     }
//         res.send(JSON.stringify(rows));
//         });
    
//   });
  
//   router.put("/member/:id", function (req, res, next) {
//     console.log(req.body.id)
  
//     // let sqlKey = `update member set 
//     // email='${req.body.email}', password='${req.body.password}' where id='${id}'`;
//     let sqlKey = `update member set 
//       email='${req.body.email}', 
//       password='${req.body.password}', 
//       member_name='${req.body.member_name}',  
//       member_phone='${req.body.member_phone}',  
//       birthday='${req.body.birthday}', 
//       member_sex='${req.body.member_sex}',
//       member_id='${req.body.member_id}',
//       member_aboutme='${req.body.member_aboutme}' where newsid='${req.body.newsid}'`;
//   conn.query(sqlKey,[], function (err, rows) {
//     if(err){
//         console.log(err);
//     }
//         res.send(JSON.stringify(rows));
//         });
    
//   });
  
  module.exports = router;