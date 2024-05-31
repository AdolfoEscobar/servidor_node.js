const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    const file = request.url === '/' ? './WWW/index.html' : `./WWW${request.url}`;

    // Manejo de la ruta /ok
    if (request.url === '/ok') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Nombre completo: Adolfo Escobar, Matrícula: 362839');
    }
    // Manejo de la ruta /ohno
    else if (request.url === '/ohno') {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('El servidor exploto');
    }
    // Manejo de la ruta /noencontrado
    else if (request.url === '/noencontrado') {
        const filePath = './WWW/caricatura.html';
        fs.readFile(filePath, (err, data) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Archivo no encontrado');
            } else {
                const extension = request.url.split('.').pop();
                switch (extension) {
                    case 'txt':
                        response.writeHead(200, { 'Content-Type': 'text/plain' });
                        break;
                    case 'html':
                        response.writeHead(200, { 'Content-Type': 'text/html' });
                        break;
                    case 'jpeg':
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        break;
                    case 'css':
                        response.writeHead(200, { 'Content-Type': 'text/css' });
                        break;
                    case 'js':
                        response.writeHead(200, { 'Content-Type': 'text/javascript' });
                        break;
                }
                response.write(data);
                response.end();
            }
        });
    } else {
        fs.readFile(file, (err, data) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.write('not found');
                response.end();
            } else {
                const extension = request.url.split('.').pop();
                switch (extension) {
                    case 'txt':
                        response.writeHead(200, { 'Content-Type': 'text/plain' });
                        break;
                    case 'html':
                        response.writeHead(200, { 'Content-Type': 'text/html' });
                        break;
                    case 'jpeg':
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        break;
                    case 'css':
                        response.writeHead(200, { 'Content-Type': 'text/css' });
                        break;
                    case 'js':
                        response.writeHead(200, { 'Content-Type': 'text/javascript' });
                        break;
                }
                response.write(data);
                response.end();
            }
        });
    }
}).listen(3333, () => {
    console.log('Servidor corriendo en el puerto 3333...');
});


