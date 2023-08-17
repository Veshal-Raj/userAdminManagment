const express = require('express')
const session = require('express-session')


//------GET REQUEST
const getNormalRoute =async(req,res)=>{
    try {
        res.render('user/userlogin')
    } catch (error) {
        console.error(error);
    }
}

const getUserLogin = async(req,res)=>{
    try {
        res.render('user/userlogin')
    } catch (error) {
        console.error(error);
    }
}

const getSignup = async(req,res)=>{
    try {
        res.render('user/signup')
    } catch (error) {
        console.error(error);
    }
}

const getHome = async(req,res)=>{
    try {
        res.render('user/home')
    } catch (error) {
        console.error(error);
    }
}

const getAdmin = async(req,res)=>{
    try {
        res.render('admin/adminlogin')
    } catch (error) {
        console.error(error);
    }
}



//--------POST REQUEST
const postLogin = async(req,res)=>{
    try {
        res.redirect('/panel')
    } catch (error) {
        console.error(error);
    }
    
}

const postSignup = async(req,res)=>{
    try {
        res.redirect('/home')
    } catch (error) {
        console.error(error);
    }
}

const postHome = async(req,res)=>{
    try {
        res.redirect('/home')
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    postLogin,
    postHome,
    postSignup,
    getHome,
    getAdmin,
    getUserLogin,
    getSignup,
    getNormalRoute
}