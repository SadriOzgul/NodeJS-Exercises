const http = require('http')
const port = process.env.PORT || 3001 // Had to chnage the local host to 3001. local host 3000 is already in use. 

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello world!')
})

server.listen(port, () => console.log(`server started on port ${port}; ` +
  'press Ctrl-C to terminate....'))

  //Soruce code credit: Ethan Brown with the 2nd edition of Web Development. 