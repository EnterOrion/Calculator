let numDisplay = "0";
let num1 = 0;
let num2 = 0;
let num1Acquired = 0;
let num2Acquired = 0; 
let decimalAcquired = 0;
let operatorSelection = "None";
updateDisplay();

function addNum(a,b) {
    return a + b;
}

function subNum(a,b) {
    return a - b;
}

function multNum(a,b) {
    return a * b;
}

function divNum(a,b) {
    return a / b;
}

function modNum (a,b) {
    return a % b;
}

function operatorOutput(opFunc, a, b) {
    let answer = 0;
    if (num2Acquired == 0) {
        document.querySelector('.calc-window').innerText = num1;
        operatorSelection = "None";
        return;
    }
    if (opFunc == "*") {
        answer = multNum(a,b);
    }
    else if (opFunc == "/") {
        if (b == 0) {
            answer = "Error";
        }
        else {
            answer = divNum(a,b);
        }
    }
    else if (opFunc == "+") {
        answer = addNum(Number(a), Number(b));
    }
    else if (opFunc == "-") {
        answer = subNum(a,b);
    }
    else if (opFunc == "%") {
        answer = modNum(a,b);
    }
    num2 = 0;
    numDisplay = 0;
    operatorSelection = "None";
    num2Acquired = 0;
    if (answer.toString().length > 9) {
        answer = answer.toExponential();
        answer = answer.toString()
        if (answer.length > 9) {
            answer = answer.slice(0,9);
        }
    }
    num1 = answer;
    num1Acquired = 1;
    document.querySelector('.calc-window').innerText = answer;
}

function inputNum(num) {
    if (num == "." && decimalAcquired != 0) {
        return;
    }

    if (numDisplay == 0 && num == ".") {
        numDisplay = "0."
        decimalAcquired = 1;
      
    }
    else if (numDisplay === 0 || numDisplay === "0") {
        numDisplay = num; 
    }
    else if (operatorSelection != "None") {
        if (num2 === 0 || num2 === "0") {
            numDisplay = num;
        }
        else {
            if (numDisplay.toString().length < 9) {
            numDisplay += num.toString();
            }
        }
    }
    else {
        if (numDisplay.toString().length < 9) {
            if (num == "." && decimalAcquired != 0) {
                return;
            }
            numDisplay += num.toString();
            if (num == ".") {
                decimalAcquired = 1;
            }
        }
    }

    updateDisplay();
}

function updateDisplay() {
    document.querySelector('.calc-window').innerText = numDisplay;
  }


function updateNum(num) {
    if (decimalAcquired == 2 && num == ".") {
        return;
    }
    if (operatorSelection == "None") {
        if (num1 === 0 || num1Acquired == 1) {
            if (num1Acquired == 1) {
                num1Acquired = 2;
            }
             
            if (num == ".") {
                num1 = "0."
                decimalAcquired = 2;
            }
            num1 = num; 
        }
        else {
            if (num1.toString().length < 9) {
                num1 += num.toString();
                if (num == ".") {
                    decimalAcquired = 2;
                }
            }
        }
    }
    else {
        if (num2 === 0) {
            num2 = num;
            if (num == ".") {
                num2 = "0."
                decimalAcquired = 2;
            }
        }
        else {
           if (num1.toString().length < 9) {
                num2 += num.toString();
                if (num == ".") {
                    decimalAcquired = 2;
                }
           }
        }
        num2Acquired = 1;
    }
}

function updateOperator(operator) {
    decimalAcquired = 0;
    if (num2Acquired == 1)
        {
            operatorOutput(operatorSelection, num1, num2);
            operatorSelection = operator;
        }
    else {
            document.querySelector('.calc-window').innerText = num1;
            operatorSelection = operator;
        }
}


function clearWindow () {
    document.querySelector('.calc-window').innerText = 0;
    numDisplay = 0;
    num1 = 0;
    num2 = 0;
    num1Acquired = 0;
    num2Acquired = 0; 
    decimalAcquired = 0;
    operatorSelection = "None";
}
