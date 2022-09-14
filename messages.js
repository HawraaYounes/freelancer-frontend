window.addEventListener('load', (event) => {
    var messagesDiv=document.getElementById("messages-div");
      
    fetch('https://localhost/freelancer-frontend/get_messages.php')
    .then(response => response.json())
    .then(data => {
      for(let i=0;i<data.length;i++){
        messagesDiv.innerHTML += `<div class="div-message">" ${data[i].message}"</div>`;
    }
    console.log(data)
  });
  });