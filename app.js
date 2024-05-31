const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { url } = req;

    // Ruta /ok
    if (url === '/ok') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Nombre completo: Adolfo Escobar, Matrícula: 362839');
    }
    // Ruta /ohno
    else if (url === '/ohno') {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('El servidor explotó');
    }
    // Ruta /noencontrado
    else if (url === '/noencontrado') {
        fs.readFile('caricatura.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Error 404: No se encontró el recurso solicitado');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    // Otras rutas
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error 404: Ruta no encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});
