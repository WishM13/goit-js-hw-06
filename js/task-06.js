const input = document.getElementById("validation-input");
const inputLength = Number(input.dataset.length);

// console.log(inputLength); 


input.addEventListener('blur', validateInput);

function validateInput(){        
    input.classList.toggle("valid", input.value.length === inputLength);
    input.classList.toggle('invalid', input.value.length !== inputLength);
}
