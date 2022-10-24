const zeroKey = document.getElementById('zero');
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
const equalKey = document.getElementById('equals');
const display = document.getElementById('display');
const key = document.querySelectorAll('.key');

var currentKey = zeroKey;


function calculator (key, currentKey) {

    currentKey = listenKey(key)
    console.log('currentkey',currentKey)
    // let i = 0;
    // while (i <5/* currentKey.innerText != '=' && currentKey.innerText != 'RESET' */) {
    //     currentKey = listenKey(key);
    //     console.log(currentKey.innerText);
    //     i++;
    //     console.log(i)
    // }   
    // console.log(currentKey)
    // console.log('outside loop') 

    
}

function listenKey (key) {
    key.forEach(element => {
        element.addEventListener ('click', function() {
            console.log(element.innerText)
            return element.innerText
        })
        
    });
}

listenKey(key)

function storesValue(keyValue, value) {

    if (keyValue === '.' || (Number(keyValue) >= 0 && Number(keyValue) <= 9) ){
        value += keyValue;
        
        return value
    }


    /* if (keyValue === '.' || (Number(keyValue) >= 0 && Number(key.innerText) <= 9) ){
        value += keyValue
        console.log(value)
        console.log('storesValue')
        return value
    }
    else if (keyValue === '=') {
        return keyValue
    } else {
        console.log('Else')
    } */

}


