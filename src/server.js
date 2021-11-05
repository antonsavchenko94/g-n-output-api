const http = require('http');
const getGnLetters = require('./utils/get-gn-letters');

const hostname = 'localhost';
const port = 3000;

const startServer = () => {
    const server = http.createServer((req, res) => {
        try {
            const { pathname, searchParams } = new URL(req.url, `http://${req.headers.host}`);

            if (req.method === 'GET' && pathname === '/get') {
                const numberParam = parseInt(
                    searchParams.get('n')
                );

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    value: getGnLetters(numberParam)
                }));
                return;
            }

            res.writeHead(404);
            res.end(JSON.stringify({
                status: 404,
                message: 'Page not found',
            }));
        } catch (e) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end();
        }
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

module.exports = startServer;
