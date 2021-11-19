const express = require('express')

const path = require('path')

const app = express()
app.use(express.static('./public'))

app.get("/",(req,res)=>{
    console.log("This is homepage");
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
})

app.get('/api',(req, res)=>{
    res.json([{name:'Milton'},{name:"Rodrigues"}])
})
app.listen(3000,()=>{
    console.log('server running at port 3000');

})