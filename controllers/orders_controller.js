const express = require('express')
const router = express.Router()


router.get('/', (req,res)=>{
    res.render(`index.ejs`)
})








app.listen(PORT, ()=>{
    console.log("You're are now on port 4000")
})