const display = document.getElementById('display');
const key = document.querySelectorAll('.key');
let value = '';
let equation = [];
let result = 0;


function calculator () {
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
                    equation.push(Number(value));
                    equation.push(e.target.innerText);
                    value = '';
                }
 
                if (equation.length >3) {
                    console.log('equação inicial', equation )
                    if (equation[1] == '+') {
                        result = equation[0]+equation[2];
                        let aux = equation [3];
                        equation = [];
                        equation[0] = result;
                        equation [1] = aux;
                        display.innerHTML= result;
    
                    } else if (equation[1] == '-') {
                        result = equation[0]-equation[2];
                        let aux = equation [3];
                        equation = [];
                        equation[0] = result;
                        equation [1] = aux;
                        display.innerHTML= result;
    
                    } else if (equation[1] == 'x') {
                        result = equation[0]*equation[2];
                        let aux = equation [3];
                        equation = [];
                        equation[0] = result;
                        equation [1] = aux;
                        display.innerHTML= result;
                        
                    } else if (equation[1] == '/') {
                        result = equation[0]/equation[2];
                        let aux = equation [3];
                        equation = [];
                        equation[0] = result;
                        equation [1] = aux;
                        display.innerHTML= result;
                        
                    }
                    
                    console.log(equation)
                }
                if (equation.length == 2 && equation[1] == '='){
                    display.innerHTML= result;
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


calculator()