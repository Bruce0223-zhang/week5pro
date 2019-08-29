const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    console.log('123');
    fs.readFile("index.html", function(error, content){

        res.writeHead(200, {
            'content-Type' : 'text/html'
    
        });
    
        res.end(content, "utf-8");

    });

    if (req.url === "/bmi" && req.method === "POST") {
        // BMI STUFF
        res.on('data',
        
        )

    };
 
})
.listen(8081);