const http = require("http")
const port = 3000

const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html")
    res.end("<h1>Hello this is Server running.</h1>")
})

server.listen(port,()=>{
    console.log(`http://localhost:${port}/`);
})