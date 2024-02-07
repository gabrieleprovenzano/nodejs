import {createServer} from "node:http";

const server = createServer((request , response)=> {
    console.log("request receive");

    response.statusCode = 200;

    response.setHeader("Content-type" , "application/json")

    response.end("<html><body><h1>This page was servered with node.js</h1></body></html>")

    const jsonResponseBody = JSON.stringify({location: "Mars"})

    response.end(jsonResponseBody)
})

server.listen(3000 , ()=> {
    console.log(`server running on http://localhost:3000`);
})

//Content-Length: 70