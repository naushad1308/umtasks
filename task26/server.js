const http = require('http');
const fs = require('fs');
const path = require('path');
const { hostname } = require('os');
// console.log(hostName)
const PORT = 3000;
const hostName = 'localhost';
const server = http.createServer((req, res) => {
    let filePath;
    let contentType = 'text/html'; // Default content type

    // Determine the file path based on the URL
    switch (req.url) {
        case '/':
            filePath = path.join(__dirname, 'home.html');
            break;
        case '/about':
            filePath = path.join(__dirname, 'about.html');
            break;
        case '/contact':
            filePath = path.join(__dirname, 'contact.html');
            break;
        case '/home.css': // Serve the CSS file
            filePath = path.join(__dirname, 'home.css');
            contentType = 'text/css';
            break
        case '/about.css': // Serve the CSS file
            filePath = path.join(__dirname, 'about.css');
            contentType = 'text/css';
            break
        case '/contact.css': // Serve the CSS file
            filePath = path.join(__dirname, 'contact.css');
            contentType = 'text/css';
            break
        default:
            filePath = path.join(__dirname, '404.html'); // 404.html file for not found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.end('404 Not Found');
                } else {
                    res.end(data);
                }
            });
            return; // Exit to avoid further processing
    }

    // Read the requested HTML file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(PORT, hostname, () => {
    console.log(`Server is listening on http://${hostName}:${PORT}`);
});