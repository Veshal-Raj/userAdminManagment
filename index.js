const express = require('express')
const app  = express()
const database = require('./model/mongoose')
const router = require('./router/mainRouter')
const adminRouter = require('./router/adminRouter')
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'1234567890QWERTY',
    saveUninitialized:false,
    resave:true
}))
app.use(cookieParser())
app.use('/',router)
app.use('/admin',adminRouter)


app.listen(3000,()=>{
    console.log("server is running on port: ",3000)
})