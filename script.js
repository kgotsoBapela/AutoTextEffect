
const textEL = document.getElementById('text');
const speedEL = document.getElementById('speed');
const text = "We Love Web Dev with Javascript";

let idx = 1;
let speed = 300/ speedEL.ariaValueMax;

writeText();

function writeText(){
    textEL.innerText = text.slice(0,idx);
    idx++;

    if(idx > text.length){
        idx=1;
    }
    setTimeout(writeText, speed);
}

speedEL.addEventListener('input', (e)=> speed = 300/e.target.value)