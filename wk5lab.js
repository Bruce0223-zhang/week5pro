let express = require("express");
let app = express();

let bodyParser = require('body-Parser')

let db = [];



app.use(express.static("img"));
app.use(express.static("css"));

let viewsPath = __dirname + '/views/';

app.use(bodyParser.urlencoded({
    extended:false
}));
app.engine("html",require('ejs').renderFile);
app.set("view.engine","html");

app.get('/',function(req,res){
    let fileName = viewsPath + "index.html";
    res.sendFile(fileName);
});

app.get('/addNewTask',function(req,res){
    let fileName = viewsPath + "addTask.html";
    console.log(db);
    res.sendFile(fileName);
});

app.get('/listAllTasks',function(req,res){
    let fileName = viewsPath + "listTasks.html";
    res.render(fileName,{
        db:db
    });
});

app.post('/addtask',function(req,res){
    
    console.log(req.body);
    db.push(req.body);
    res.redirect('/listAllTasks');
});

app.listen(8080);