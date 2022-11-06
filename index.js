const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

function serveHtml(res, fileName) {
  fs.readFile(path.join(__dirname, 'public', fileName), (error, content) => {
    if (error) throw error;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    serveHtml(res, 'index.html');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
