let numDisplay = 0;
let num1 = 0;
let num2 = 0;
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

function operatorOutput(opFunc, a, b) {
    let answer = 0;
    if (opFunc == "*") {
        answer = multNum(a,b);
    }
    else if (opFunc == "/") {
        answer = divNum(a,b);
    }
    else if (opFunc == "+") {
        answer = addNum(Number(a), Number(b));
    }
    else if (opFunc == "-") {
        answer = subNum(a,b);
    }
    num2 = 0;
    numDisplay = 0;
    operatorSelection = "None";
    num1 = answer;

    document.querySelector('.calc-window').innerText = answer;
}

function inputNum(num) {
    if (numDisplay == 0) {
        numDisplay = num;
      
    }
    else if (num1 != 0 && operatorSelection != "None") {
        if (num2 == 0) {
        numDisplay = num;
        }
        else {
            numDisplay += num.toString();
        }
    }
    else {
    numDisplay += num.toString();
    }
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('.calc-window').innerText = numDisplay;
  }


function updateNum(num) {
    if (operatorSelection == "None") {
        if (num1 == 0) {
            num1 = num;  
        }
        else {
        num1 += num.toString();
        }
    }
    else {
        if (num2 == 0) {
        num2 = num;
        }
        else {
        num2 += num.toString();
        }
    }
}

function updateOperator(operator) {
    
    if (operatorSelection == "None") {
    document.querySelector('.calc-window').innerText = num1;
    operatorSelection = operator;
    }
    else {
        operatorOutput(operatorSelection, num1, num2);
        operatorSelection = operator;
    }
}


function clearWindow () {
    document.querySelector('.calc-window').innerText = 0;
    numDisplay = 0;
    num1 = 0;
    num2 = 0;
    operatorSelection = "None";
}
