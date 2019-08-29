let express= require('express');
let app = express();
let db = [];

app.listen(8081); 

app.get("/addNo/:newNo", function(req, res){
    db.push(parseInt(req.params.newNo));
    res.send("added" + req.params.newNo);
    console.log(db); 
});

app.get("/getAll", function(req, res){
    res.send(arraytoString(db));
});






function removeElement(array, element){
    let index = array.indexOf(element);
    array.splice(index, 1);
}

function arraytoString(array){
    let string = "";
    array.forEach(function(element, index){
        string += index + " - " + element + "<br>";
    });
    return string;
};