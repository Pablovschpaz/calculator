function numb(x){
    var display = document.querySelector("#display");
    display.textContent+=x;
    display.textContent*=1;
    if(x=="."){
        display.textContent+=x;
    }
}

function abs(){
    getValue();
    display.textContent *= -1 ;
}

function sqrt(){
    getValue();
    display.textContent = valueDisplay * valueDisplay;
}

function operator(x){
    var hist = document.querySelector("#hist");
    getDisplay();

    if(x=="÷"){
        hist.textContent=display.textContent;
        cleanDisplay();
        document.querySelector("#op").textContent="/";
    }
    if(x=="*"){
        hist.textContent=display.textContent;
        cleanDisplay();
        document.querySelector("#op").textContent="*";
    }
    if(x=="-"){
        hist.textContent=display.textContent;
        cleanDisplay();
        document.querySelector("#op").textContent="-";
    }
    if(x=="+"){
        hist.textContent=display.textContent;
        cleanDisplay();
        document.querySelector("#op").textContent="+";
    }
    if(x=="%"){
        hist.textContent=display.textContent;
        cleanDisplay();
        document.querySelector("#op").textContent="%";
    }
    
}

function result(){
    var valueHist = parseFloat(document.querySelector("#hist").textContent);
    var valueDisplay = parseFloat(document.querySelector("#display").textContent);
    let op = document.querySelector("#op").textContent;

    if(valueHist==0){
        return;
    }else{
        if(op=="/"){
            display.textContent = valueHist / valueDisplay;
        }
        if(op=="*"){
            display.textContent = valueHist * valueDisplay;
        }
        if(op=="-"){
            display.textContent = valueHist - valueDisplay;
        }
        if(op=="+"){
            display.textContent = valueHist + valueDisplay;
        }
        if(op=="%"){
            display.textContent = (valueHist / 100) * valueDisplay;
        }
        cleanHist();
    }
}

function getDisplay(){
    display = document.querySelector("#display");
}

function getValue(){
    valueHist = parseFloat(document.querySelector("#hist").textContent);
    valueDisplay = parseFloat(document.querySelector("#display").textContent);
}

function cleanHist(){
    hist.textContent = 0;
}

function cleanDisplay(){
    display.textContent=0;
}