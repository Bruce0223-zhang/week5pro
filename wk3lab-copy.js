const http = require('http');
const fs = require('fs');
const {parse} = require("querystring");

http.createServer(function(req, res){
    var url = req.url;
    console.log("request"+url);
    
    if (req.url === "/") {
        sendFile(res, "login.html");
    }else{
         // log-in stuff
         let body = "";
         req.on('data', chunk =>{
             console.log(chunk.toString());
             body += chunk.toString();
         });
 
         console.log(2, body);
         req.on("end", ()=>{
             console.log(body);
             let data = parse(body);
             console.log(data);
             let username = data.username;
             let password = data.password;
             
             if (username === "admin" && password === "pass"){
                                 
                 sendFile(res, "mainpage.html");
             } else{
                 
                 sendFile(res, "accessdenied.html");
             }
                    
         })
    }
 
})
.listen(8080);

function sendFile (res, fileName){
    fs.readFile(fileName, (error, content)=>{
        console.log(fileName);
        res.end(content, "utf-8");
    });
}
