let express= require('express');
let app = express();
let db = [];

app.listen(8080); 

app.get("/newItem/:newName/:newQuantity/:newPrice", function(req, res){

    let newId= Math.round(Math.random()*1000);
    let newItem = {id:newId, 
                   name:(req.params.newName), 
                   quantity:parseInt(req.params.newQuantity),
                   price:parseInt(req.params.newPrice)};
    
    db.push(newItem);
    console.log(db);    
});

app.get("/listAllItems", function(req, res){
    res.send(generateList(db));
})

app.get("/deleteItem/item2del", function(req, res) {
    let item2del = parseInt(req.params.item2del);
    db.forEach(function(element, index){
        if (db[index].id === item2del){
            db.splice(index, 1);
            res.send(item2del + " has been deleted");
            console.log(db);
            
       
        }
        }
    )



    // removeItem(db, parseInt(req.params.item2del));
    // res.send(item2del + "has been deleted")
    // console.log(db);
    
})

app.get("/totalValue", function(req, res){
    let totalValue = 0;
    db.forEach(function(element, index){
        
        totalValue += db[index].quantity * db[index].price;
        
    })
    res.send("the warehouse value is" + totalValue);
})

function generateList (array) {
   let string = "";
   array.forEach(function(element, index){
       let cost = array[index].quantity *array[index].price;
       
       string += array[index].id + "-" + array[index].name + "-" +  array[index].quantity + "-" +  array[index].price + "-" + cost + "<br>";
   });
   return string
};

function removeItem (array, item2del){
    array.forEach(function(element, index){
        if (array[index].id === item2del){
            array.splice(index, 1);
        } else{
            res.send("the id does not exit")
        }
        }
    )
};