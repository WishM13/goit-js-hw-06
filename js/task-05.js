const input = document.getElementById('name-input');
const userName = document.getElementById('name-output');


input.addEventListener('input', onIput);

function onIput(event) {
    if(event.currentTarget.value === ""){
       return userName.textContent = "Anonymous"
    }
    userName.textContent = event.currentTarget.value;
        
}

