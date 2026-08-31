var courses= ["html" , "css" , "js"];
var course = prompt("enter course");

var found = courses.find(function(item){
    return item === course; 
});
var index = courses.findIndex(function(item){
    return item === course; 
});

if(found){
    console.log("found");
    console.log(index)

}
else{
    console.log("notfound");
}


