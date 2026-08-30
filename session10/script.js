var degree = prompt("enter your degree");

if (degree==="" || degree=== null)
{
    alert("enter your degree");
}
else if (degree>100){
   
    alert("invaled");
}
else if (degree > 90){
    alert("Exellent");
}
else if (degree>80){
    alert("verygood");
}
else if (degree>0){
    alert("good");
}
else {
    alert("fail");
}
