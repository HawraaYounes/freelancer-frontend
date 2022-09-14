var submitBtn=document.getElementById("submit");
var myForm=document.getElementById("myForm");
var fullname=document.getElementById("fullname").value;
var email=document.getElementById("email").value;
var phone=document.getElementById("phone").value;
var message=document.getElementById("message").value;
myForm.addEventListener("submit",sendData)

function sendData(fullname,email,phone,message){
    var searchparams=new URLSearchParams({"fullname":fullname,"email":email,"phone":phone,"message":message});
    fetch(`http://localhost/freelancer-frontend/send_data.php`,{
        method:'POST',
        body: searchparams
    }).then(response=>response.json()).then(data=>console.log(data))
}
