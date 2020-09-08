//引入Express模块
const express = require('express');

//引入CORS模块

const cors = require('cors');

//引入MySQL模块

const mysql = require('mysql');

//创建MySQL连接池
const pool = mysql.createPool({
    //数据库服务器地址
    host:'127.0.0.1',
    //数据库用户名
    user:'root',
    //数据库用户密码
    password:'',
    //数据库服务器端口号
    port:3306,
    //数据库名称
    database:'meishi',
    //编码方式
    charset:'utf8',
    //连接限制
    connectionLimit:15
});

//创建Express实例
const server = express();

//将CORS作为Server的中间件使用
server.use(cors({
  origin:['http://127.0.0.1:8080','http://localhost:8080']
}));


//获取所有文章分类信息的API
server.get('/food',(req,res)=>{
    //SQL查询语句
    let sql = 'SELECT *  FROM dishes';
    //执行SQL查询语句
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        //响应到客户端的信息
        res.send({message:'查询成功',code:1,results:results});
    });
});
//指定服务器的监听端口号
server.listen(5050);