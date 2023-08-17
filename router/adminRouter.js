const express = require('express')
const session = require('express-session')
const adminRouter = express.Router()
const controller = require('../controller/adminController')

//------------------------GET REQUEST
adminRouter.get('/admin',controller.getNormalAdminRoute)


//-------------------------POST REQUEST
adminRouter.post('/panel',controller.postAdminLogin)


module.exports = adminRouter