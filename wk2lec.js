let http = require('http');
let urlParse = require('url');
http.createServer(function (request, response) {
    const {method,url} = request; 
    console.log(url, method); 
    let  q = urlParse.parse(url, true).query; 
    let pathName=urlParse.parse(url, true).pathname; 
    if (pathName === '/unit')
    {
        console.log('Hello from FIT2095');
        response.writeHead(200); 
        response.write('Hello from FIT2095');
        response.end();
    } else if (pathName === '/year') {        
        response.writeHead(200); 
        response.write('its 2018');
        response.end();

        
    } else {
        response.writeHead(200); 
        response.write('Have a good day');
        response.end();
    }
}).listen(6789);