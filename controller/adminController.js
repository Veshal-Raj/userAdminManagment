const express = require('express')
const session = require('express-session')


//---------------------GET REQUEST
const getNormalAdminRoute =(req,res)=>{
    res.render('admin/adminlogin')
}


//---------------------POST REQUEST
const postAdminLogin = (req,res)=>{
    res.render('admin/panel')
}

module.exports={
    getNormalAdminRoute,
    postAdminLogin  
}