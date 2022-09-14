var submitBtn=document.getElementById("submit");
var myForm=document.getElementById("myForm");
var fullname=document.getElementById("fullname");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var message=document.getElementById("message");
var messagsBtn=document.getElementById("messages-btn");


myForm.addEventListener("submit",sendData);//on submitting the form,sendData function is called
messagsBtn.addEventListener("click",viewMessages);

function sendData(){
    var searchparams=new URLSearchParams();
    searchparams.append("fullname",fullname.value);
    searchparams.append("email",email.value);
    searchparams.append("phone",phone.value);
    searchparams.append("message",message.value);
    fetch(`http://localhost/freelancer-frontend/send_data.php`,{
        method:'POST',
        body: searchparams
    }).then(response=>response.json()).then(data=>console.log(data));
}

function viewMessages(){//redirect  to messages.html
  window.location.replace('messages.html');

}
