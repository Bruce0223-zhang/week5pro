const http = require('http');
const fs = require('fs');
const {parse} = require("querystring");

http.createServer(function(req, res){
    var url = req.url;
    
    
    if (req.url === "/") {
        sendFile(res, "login.html");
    }else{
         // log-in stuff
         let body = "";
         req.on('data', chunk =>{
             
             body += chunk.toString();
         });
 
         
         req.on("end", ()=>{
             
             let data = parse(body);
             
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
        
        res.end(content, "utf-8");
    });
}
