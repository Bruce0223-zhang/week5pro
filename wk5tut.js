let express = require('express');
let app = express();

let bodyParser = require('body-Parser')

let db = [];
let viewsPath = __dirname + '/views';

//homepage
//create new user page
//list all users page

app.use(express.static("public/img"));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.engine("html",require('ejs').renderFile);
app.set("view.engine","html");


app.get('/',function(req,res){
    let fileName = viewsPath + "index.html";
    res.sendFile(fileName);
});

app.get('/addNewCustomer',function(req,res1){
    let fileName = viewsPath + "addcustomers.html";
    res1.sendFile(fileName);
});

app.get('/getAllCustomers',function(req,res){
    let fileName = viewsPath + "allcustomers.html";
    res.render(fileName,{
        customers:db
    });
});

app.post('/addmycust',function(req,res){
    console.log(req.body);
    db.push(req.body);
    res.redirect('/getAllCustomers');
});
app.listen(8080);