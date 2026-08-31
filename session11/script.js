// var courses= ["html" , "css" , "js"];
// var course = prompt("enter course");

// var found = courses.find(function(item){
//     return item === course; 
// });
// var index = courses.findIndex(function(item){
//     return item === course; 
// });

// if(found){
//     console.log("found");
//     console.log(index)
// }
// else{
//     console.log("notfound");
// }

// var lastName = "menna"
// var user = {
//     firstName : "zein" ,
//     lastName : "tamer" ,
//     age : 30 ,
//     isGraduated : true,
//     fullName : function(){

//         // this ==> object (user)////////////

//         return `${this.firstName} ${this.lastName}` // template literals احط قيمه متغير 
//     },
//     testFunc : ()=>{
//         // this ==> window
//         return this.lastName
//     } , 
//     phoneList : ()=>{
//         return {
//             homePhone : "01000000",
//             officePhone : "012222222",
//             test : function(){
//                 return [10 , 50 ,4]
//             }
//         }
//     }
// }
// console.log(user.phoneList())
// console.log(user.phoneList().officePhone)
// console.log(user.phoneList().test())
// console.log(user.phoneList().test()[1])
// // console.log(user.age)
// user.homeAddress = "Maadi"
// user['age'] = 25
// console.log(user)
// console.log(user.fullName())
// console.log(user.testFunc()) // menna


//   var fullName =  function(){
//     return "Zein tamer"
//     }

var userlist=[];
function addUser(){
    var name = prompt("enter your name");
    var id = prompt("enter id");
    var balance = Number(prompt("enter balance"));

    var user = {
        name:name,
        id:id,
        balance: balance

    }
    userlist.push(user);
}
  addUser();
  addUser();


 function editUserBalanceByid(){
    var id = prompt("enter id");
    var newBalance = Number(prompt("enter new balance"));

    var user = userlist.find(function(user){
        return user.id == id;
    })

    if(user){
        user.balance=newBalance;
        alert("done")
    }
    else{
        alert(not);
    }
 }
 editUserBalanceByid();


 function transferBalance(){
    var fromId = prompt("enter sender id");
    var toId = prompt("enter receiver id");
    var amount =Number(prompt("enter amount")); 

    var sender = userlist.find((user)=> user.id == fromId);
    var receiver= userlist.find((user)=> user.id == toId);

    sender.balance -=amount;
    receiver +=amount;

    alert("transfer done");
    }
    transferBalance();
    

 function deleteUserById(){
    var id = prompt("enter your id");

    var index = userlist.findIndex((user)=> user.id ===id);

    if(index !== -1){
        userlist.splice(index , 1);
    alert("delet success");
    }

    else{
    alert("user not exit")}
    }

 console.table(userlist);
 deleteUserById();
