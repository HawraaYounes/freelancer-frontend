var submitBtn=document.getElementById("submit");
var fullname=document.getElementById("fullname");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var message=document.getElementById("message");

submitBtn.addEventListener("click",sendData);

function sendData(){
   fetch('send_data.php'),{
    method:'POST',
    body 
   }
}