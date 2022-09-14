window.addEventListener('load', (event) => {
    fetch('https://localhost/freelancer-frontend/get_messages.php')
    .then(response => response.json())
    .then(data => {
      for(let i=0;i<data.length;i++){
        messagesDiv.innerHTML += `<div class="div-message">" ${data.message}"</div>`;
    }
  });
  });