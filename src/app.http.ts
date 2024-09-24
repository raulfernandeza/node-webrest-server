/*
interface hola {

    nombre: string;
}


console.log('Hola Mundo');
*/

import http from 'http';
import { join } from 'path';
import fs from 'fs';

const server = http.createServer((req, res) => {

    console.log(req.url);

    //res.write('Hola Mundo WEB');
    //res.end();

    //const data = {name: 'Jhon Doe', age: 30, city: 'New York'};
    //res.writeHead(200, { 'Content-Type': 'application/json' });
    //res.end( JSON.stringify(data) );


    if (req.url === '/' ){

        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end( htmlFile );
    }
    else {

        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end( );
    }



});


server.listen(8080, ()=> {
    console.log('Server running on port 8080');
})