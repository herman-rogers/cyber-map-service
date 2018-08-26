import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Server is running'));

app.listen('3000', () => console.log('Server running on port 3000'));

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');

