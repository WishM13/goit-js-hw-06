const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', onInputSizeControl);

function onInputSizeControl(event){
    text.style.fontSize = `${event.target.value}px`;
}