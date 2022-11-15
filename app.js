let numDisplay = 0;
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

function operator(opFunc, a, b) {
    return opFunc(a, b);
}

function inputNum(num) {
    if (numDisplay == 0) {
        numDisplay = num;
      
    }
    else {
    numDisplay += num.toString();
    }
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('.calc-window').innerText = numDisplay;
  }


function clearWindow () {
    document.querySelector('.calc-window').innerText = 0;
}
