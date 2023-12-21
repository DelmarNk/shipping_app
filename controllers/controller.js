const express = require('express')
const app = express()

const controller = require('./controllers/controller')

router.get('/home', (req,res)=>{
    res.render(`index.ejs`)
})








app.listen(PORT, ()=>{
    console.log("You're are now on port 4000")
})