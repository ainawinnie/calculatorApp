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
let equation = [];
let result = 0;


function listenKey () {
    document.addEventListener('click', function(e) {
        if (e.path[0].classList.contains('key')) {

          
            if (Number(e.target.innerText) <= 9 || e.target.innerText == '.' || e.target.innerText == 'DEL') {
                if (e.target.innerText == 'DEL') {
                    value = value.slice(0, value.length-1);
                    display.innerHTML= value;
                } else {
                    if (equation[1] == '=') {
                        value = '';
                        result = 0;
                        equation= []; 
                        console.log(equation);
                    } 
                    value += e.target.innerText;
                    display.innerHTML= value;
                }
            } else if(e.path[0].classList.contains('operator')) {
                console.log('primeiro', equation)
                if (equation.length == 2 && equation[1] == '=') {
                    console.log('entrada equatio', equation)
                        equation.pop();
                        equation.push(e.target.innerText);
                        console.log(equation);

                } else {
                        result += Number(value);
                    console.log('result', result);
                    console.log(value)
                    equation.push(Number(value));
                    equation.push(e.target.innerText);
                    value = '';
                    console.log(equation)
                    console.log(result)
                }
                
                /* result += Number(value);
                console.log('result', result);
                console.log(value)
                equation.push(Number(value));
                equation.push(e.target.innerText);
                value = '';
                console.log(equation)
                console.log(result) */
                if (equation.length >3) {
                    console.log('equação inicial', equation )
                    if (equation[1] == '+') {
                        result = equation[0]+equation[2];
                        let aux = equation [3];
                        equation = [];
                        equation[0] = result;
                        equation [1] = aux;
                        display.innerHTML= result;
                        console.log('soma', result)  
                        console.log(value)
    
                    } else if (equation[1] == '-') {
                        result = equation[0]-equation[2];
                        let aux = equation [3];
                        equation = [];
                        equation[0] = result;
                        equation [1] = aux;
                        display.innerHTML= result;
                        console.log('substração', result)
    
                    } else if (equation[1] == 'x') {
                        result = equation[0]*equation[2];
                        let aux = equation [3];
                        equation = [];
                        equation[0] = result;
                        equation [1] = aux;
                        display.innerHTML= result;
                        console.log('multiplicação', result)
                        
                    } else if (equation[1] == '/') {
                        result = equation[0]/equation[2];
                        let aux = equation [3];
                        equation = [];
                        equation[0] = result;
                        equation [1] = aux;
                        display.innerHTML= result;
                        console.log('divisão', result)
                        
                    }
                    
                    console.log(equation)
                }
                if (equation.length == 2 && equation[1] == '='){
                    /* let aux = equation[0];
                    equation = [];
                    equation[0] = aux; */
                    display.innerHTML= result;
                    console.log('igual', equation)
                    console.log(value)
                    console.log(result)
                }
                
            } else if (e.path[0].classList.contains('reset')) {
                value = '';
                result = 0;
                equation= [];   
                display.innerHTML = '';              
                
            }  else {
                display.innerHTML = 'error';
            }
            
        }
        
    })
}   


listenKey()