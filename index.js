const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
