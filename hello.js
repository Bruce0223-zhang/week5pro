ar = [1,2,3,4,5,6];

// for (let i = 0; i < ar.length; i++){
//     console.log(ar[i]);
// }

// function addTwoNum(a,b){
//     return (a + b);
// }

// var result = addTwoNum(1,2);
// console.log(result);

// let divideTwoNum = (a,b) => {
//     return (a / b);
// }

// var res = divideTwoNum(4,2);
// console.log();

let obj = {
    type:"BMW",
    model:"M135I",
    color:"white",
    year:"2014"
};
// console.log(obj);
// console.log(obj.model);
// obj.adress = "Mel";
// console.log(obj);

// let keys = Object.keys(obj);
// keys.forEach(function(item,index,ar){
//     console.log(index);
    
// })

let studentObj = {
    firstName:"Tom",
    lastName:"Jerry",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}

let keys = Object.keys(studentObj);
console.log(keys);
keys.forEach(function(item,index,ar){
    console.log(studentObj[item]);
    
})



