const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Pipeline is working \n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// test comment to run pipeline    
