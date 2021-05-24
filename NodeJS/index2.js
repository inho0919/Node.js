const http = require('http');
const server = http.createServer((req,res) => {
    console.log("URL : " + req.url);
    console.log("METHOD : " + req.method);
    console.log(req.headers);

    res.write(`
        <html>
            <body>
                Hi from Node JS Server!
            </body>
        </html>
    `);

    res.end();
});

server.listen(5050);