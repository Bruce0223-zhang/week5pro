let express = require('express');
let app = express();
app.get("/math/add/:operand1/:operand2", function(req, res){
    let operand1 = parseInt(req.params.operand1);
    let operand2 = parseInt(req.params.operand2);
    let result = operand1 + operand2;
    res.send("Output:" + String(result));
});

app.get("/math/sub/:operand1/:operand2", function(req, res){
    let operand1 = parseInt(req.params.operand1);
    let operand2 = parseInt(req.params.operand2);
    let result = operand1 - operand2; 
    res.send("Output:" + String(result));
});
app.listen(8080);