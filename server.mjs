import {createServer} from "node:http"

const server = createServer((request , response)=> {
    console.log("request receive");

    response.statusCode = 200;
    response.setHeader("Content-type" , "text/html")

    response.end("<html><body><h1>This page was servered with node.js</h1></body></html>")
})

server.listen(3000 , ()=> {
    console.log(`server running on http://localhost:3000`);
})