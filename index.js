// JavaScript source code
/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: ' there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

*/
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 5000)

