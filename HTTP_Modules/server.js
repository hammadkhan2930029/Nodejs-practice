const http = require('http')
//what exactily server ? this is event emitter
//server ma arument pass karna hy as a callback fuction 
//or is function ma 2 parameters deny hen request and response

const server = http.createServer((request, response) => {
    if (request.url === '/') {
         response.setHeader("Content-Type","text/html")
        response.write('<h1>My name is Muhammad hammad khan</h1>')
        response.end();
    }
     if (request.url === '/about') {
         response.setHeader("Content-Type","text/plain")
        response.write('React native developer')
        response.end();
    }
     if (request.url === '/contact') {
        response.setHeader("Content-Type","text/plain")
        response.write('hammad2930029@gmail.com')
        response.end();
    }

})
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`)
})