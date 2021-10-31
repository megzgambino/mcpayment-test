const http = require('http')
const app = require('./app')
const port = 4000

const server = http.createServer(app)

server.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})