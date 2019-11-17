const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const server = http.createServer(async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    await timeout(100)
    console.log('Hello for web server')
    res.end('Hello World\n')
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
