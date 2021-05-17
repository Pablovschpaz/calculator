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

    /*DESIGN PATTERNS*/

    if (valueHist == 0) {
        return;
    }
    const divide = () => {
        display.textContent = valueHist / valueDisplay;
         op = "÷";
    }
    const multiplies = () => {
        display.textContent = valueHist * valueDisplay;
        op = "x"
    }
    const subtracts = () => {
        display.textContent = valueHist - valueDisplay;
        op = "-"
    }
    const sum = () => {
        display.textContent = valueHist + valueDisplay;
        op = "+"
    }
    const percent = () => {
        let result = (valueHist / 100) * valueDisplay;
        if(Number.isInteger(result)){
            display.textContent = result;
        }else{
            display.textContent = (result.toFixed(3))*1;
        }
        
        op = "% of"
    }

    const calc = [
        divide,
        multiplies,
        subtracts,
        sum,
        percent
    ]

    calc[op]();
    
    hist.innerHTML = `${valueHist}  ${op}  ${valueDisplay}`;
}


function getDisplay() {
    display = document.querySelector("#display");
}

function getValue() {
    valueHist = parseFloat(document.querySelector("#hist").textContent);
    valueDisplay = parseFloat(document.querySelector("#display").textContent);
}

function cleanHist(x) {
    hist.textContent = x;
}

function cleanDisplay(x) {
    display.textContent = x;
}