const http = require('http');
const server = http.createServer((req,res)=>{
if(req.url==='/')
{
    res.end("This is out home page")
}
if(req.url==='/about')
{
    res.end("This is about page")
}
res.end(`<h1>Oops</h1>
<p>Error occured </p>`)
})

server.listen(3000)