function numb(x) {
    var display = document.querySelector("#display");
    display.textContent += x;
    display.textContent *= 1;
    if (x == ".") {
        display.textContent += x;
    }
}

function abs() {
    getValue();
    display.textContent *= -1;
}

function sqrt() {
    getValue();
    display.textContent = valueDisplay * valueDisplay;
    hist.innerHTML = `${valueDisplay}   ^2`
}

function operator(x) {
    var hist = document.querySelector("#hist");
    getDisplay();
    hist.textContent = display.textContent;
    cleanDisplay();
    sessionStorage.setItem("op", x);
}

function result() {
    var valueHist = parseFloat(document.querySelector("#hist").textContent);
    var valueDisplay = parseFloat(document.querySelector("#display").textContent);
    var op = sessionStorage.getItem("op");


    if (valueHist == 0) {
        return;
    } else {
        if (op == "/") {
            display.textContent = valueHist / valueDisplay;
        }
        if (op == "*") {
            display.textContent = valueHist * valueDisplay;
        }
        if (op == "-") {
            display.textContent = valueHist - valueDisplay;
        }
        if (op == "+") {
            display.textContent = valueHist + valueDisplay;
        }
        if (op == "%") {
            display.textContent = (valueHist / 100) * valueDisplay;
        }
        hist.innerHTML = `${valueHist}  ${op}  ${valueDisplay}`;
    }

    
}




function getDisplay() {
    display = document.querySelector("#display");
}

function getValue() {
    valueHist = parseFloat(document.querySelector("#hist").textContent);
    valueDisplay = parseFloat(document.querySelector("#display").textContent);
}

function cleanHist() {
    hist.textContent = 0;
}

function cleanDisplay() {
    display.textContent = 0;
}