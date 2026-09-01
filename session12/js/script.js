
if (document.querySelector('#h1_ID')) {
    var h1Element = document.querySelector('#h1_ID')

    h1Element.style.color = "blue"
    h1Element.classList.add('card')
    // h1Element.classList.remove('border') // يشيل class
    h1Element.classList.toggle('border') ////لو  موجود يشيله///   لو مش موجود يضيفه

}
// ////input ياخد الكلام ويحطه في العنصر اللي بعد الـ 
//  var userNameInput = document.getElementById('userName')
//  userNameInput.addEventListener('input', (e) => {  //بيتنصت
//      console.log('typing')
//      console.log(userNameInput.value)
//      console.log(e)
//       userNameInput.nextElementSibling.innerText = userNameInput.value
//       e.target.nextElementSibling.innerText = userNameInput.value
//  })


 var myForm =document.querySelector('#myForm')
 var users=[]
 myForm.addEventListener("submit", (e)=>{
     e.preventDefault()
     console.log(e)

    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userEmail.value)

var user = {
        userName: e.target.elements.userName.value,
        userEmail: e.target.elements.userEmail.value,
    }
    users.push(user)
    console.table(users)


var div = document.createElement('div')
var h3 = document.createElement('h3')
var h4 = document.createElement('h4')

h3.innerText = "menna"
h4.innerText = "menna@gmail"

div.appendChild(h3)
div.appendChild(h4)

div.classList.add('alert', 'user-card')
 var divContainer = document.getElementById('divContainer')
divContainer.appendChild(div);

console.log(div)
console.log(h3)
console.log(h4)
})


// counter/////
var setTime = setTimeout(()=>{
    console.log(`js`)
 } ,1000)

 var i = 0 
 var counter = document.querySelector('.counter')
 var setInt = setInterval(()=>{

    counter.innerText=i
    if(i==100) clearInterval(setInt)
        i++

 } ,100)
console.log(setTime)
console.log(setInt)


//     console.log(e.target.previousElementSibling)///same =
//     console.log(btn.previousElementSibling)////////same
 
var img = document.getElementById("myImage");
var btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {

    if (img.src.includes("image/bogdan-vaskan-1taEJJwIv-0-unsplash.jpg")) {
        img.src = "image/city head.jpg";
    } else {
        img.src = "image/bogdan-vaskan-1taEJJwIv-0-unsplash.jpg";
    }

});



