/* const zeroKey = document.getElementById('zero');
const oneKey = document.getElementById('one');
const twoKey = document.getElementById('two');
const threeKey = document.getElementById('three');
const fourKey = document.getElementById('four');
const fiveKey = document.getElementById('five');
const sixKey = document.getElementById('six');
const sevenKey = document.getElementById('seven');
const eightKey = document.getElementById('eight');
const nineKey = document.getElementById('nine');
const deleteKey = document.getElementById('delete');
const plusKey = document.getElementById('plus');
const minusKey = document.getElementById('minus');
const pointKey = document.getElementById('point');
const slashKey = document.getElementById('slash');
const timesKey = document.getElementById('times');
const resetKey = document.getElementById('reset');
const equalKey = document.getElementById('equals'); */
const display = document.getElementById('display');
const key = document.querySelectorAll('.key');
let value = '';
let result = '';


function listenKey () {
    document.addEventListener('click', function(e) {
        if (e.path[0].classList.contains('key')) {

            if (Number(e.target.innerText) <= 9 || e.target.innerText == '.' || e.target.innerText == 'DEL') {
                if (e.target.innerText == 'DEL') {
                    value = value.slice(0, value.length-1);
                    display.innerHTML= value;
                } else {
                    value += e.target.innerText;
                    result = Number(value);
                    display.innerHTML= value;
                }
            } else if(e.path[0].classList.contains('operator')) {
                result = Number(value);
                value = '';
                if (e.target.innerText == '+') {
                    display.innerHTML= "+";

                } else if (e.target.innerText == '-') {
                    display.innerHTML= "-";

                } else if (e.target.innerText == 'x') {
                    display.innerHTML= "x";
                    
                } else if (e.target.innerText == '/') {
                    display.innerHTML= "/";
                    
                }
            } else if (e.path[0].classList.contains('reset')) {
                value = '';
                result = '';
                display.innerHTML = '';              
                
            } else if (e.path[0].classList.contains('equals')) {
                display.innerHTML= result;
            } else {
                display.innerHTML = 'error';
            }
            
        }
        
    })
}   


listenKey()