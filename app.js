const express = require('express')
const app = express()
const api = require(__dirname + '/api.js')
app.use(middleware)
app.use('/',api)
function middleware(req,res,next){
    console.log('kk')
    next()
}
app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(3000)