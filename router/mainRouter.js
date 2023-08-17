const express = require('express')
const session = require('express-session')
const router = express.Router()
const controller = require('../controller/mainController')

//----------------------------GET REQUEST
router.get('/',controller.getNormalRoute)
router.get('/signup',controller.getSignup)
router.get('/userlogin',controller.getUserLogin)
router.get('/home',controller.getHome)

//----------------------------GET ADMIN REQUEST
router.get('/admin',controller.getAdmin)

//----------------------------POST ADMIN REQUESTS
router.post('/panel',controller.postLogin)

//-----------------------------POST REQUESTS
router.post('/signup',controller.postSignup)
router.post('/login',controller.postHome)
console.log("router reached")
module.exports=router