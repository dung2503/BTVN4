function add() {
    var numberA = parseFloat(document.getElementById("numberA").value);
    var numberB = parseFloat(document.getElementById("numberB").value);
    var result = numberA + numberB;
    document.getElementById("result").value = result;
}

function subtract() {
    var numberA = parseFloat(document.getElementById("numberA").value);
    var numberB = parseFloat(document.getElementById("numberB").value);
    var result = numberA - numberB;
    document.getElementById("result").value = result;
}

function multiply() {
    var numberA = parseFloat(document.getElementById("numberA").value);
    var numberB = parseFloat(document.getElementById("numberB").value);
    var result = numberA * numberB;
    document.getElementById("result").value = result;
}

function divide() {
    var numberA = parseFloat(document.getElementById("numberA").value);
    var numberB = parseFloat(document.getElementById("numberB").value);
    var result = numberA / numberB;
    document.getElementById("result").value = result;
}