/*
interface hola {

    nombre: string;
}


console.log('Hola Mundo');
*/

import http2 from 'http2';
import { join } from 'path';
import fs from 'fs';

const server = http2.createSecureServer( {
    key: fs.readFileSync('./keys/Server.key'),
    cert: fs.readFileSync('./keys/Server.crt'),
},(req, res) => {

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
    //else {

    //    res.writeHead(400, { 'Content-Type': 'text/html' });
    //    res.end( );
    //}

    if (req.url?.endsWith('.js') ){

        res.writeHead(200, {'Content-Type': 'application/javascript' });
    } else if( req.url?.endsWith('css') ){
        res.writeHead(200, {'Content-Type': 'application/css' });
    }

    try {
        const responseContent = fs.readFileSync(`./public${ req.url }`)
        res.end(responseContent);
        
    } catch (error) {
        res.writeHead(404, {'Content-Type': 'text/html' });
        res.end();
        
    }


});


server.listen(8080, ()=> {
    console.log('Server running on port 8080');
})