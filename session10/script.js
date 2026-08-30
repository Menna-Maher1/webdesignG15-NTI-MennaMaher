// var degree = prompt("enter your degree");

// if (degree==="" || degree=== null)
// {
//     alert("enter your degree");
// }
// else if (degree>100){
   
//     alert("invaled");
// }
// else if (degree > 90){
//     alert("Exellent");
// }
// else if (degree>80){
//     alert("verygood");
// }
// else if (degree>0){
//     alert("good");
// }
// else {
//     alert("fail");
// }

// function test(msg) {
//     var p = prompt(msg);
//     return p;
// }

// var userName = test("enter your name");
// var userAge = test("enter your age");
// var userAddress = test("enter your address");

// console.log(userName);
// console.log(userAge);
// console.log(userAddress);

// function looping (startNum, endNum, breakNum, contNum){
//     if(startNum==undefined || endNum==undefined || breakNum== undefined || contNum== undefined){
//         alert("enter all num")
//         return;
//     }

// for(var i = startNum ; i <= endNum ; i++){
//      if(i == contNum){ 
        
//     continue;
//      }
//      if(i == breakNum) {
    
//         break;
//     }
//      console.log(i);
//  }
//  return i;
// }
// looping(1,10,9,3);


var courses= ["html" , "css" , "js"];
var course = prompt("enter course");

if(courses.includes(course)){
    console.log("found");

}
else{
    console.log("notfound");
}
