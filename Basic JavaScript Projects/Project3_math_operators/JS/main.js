function add(A,B) {
    var addition = A + B;
    document.getElementById("Math").innerHTML = addition; //takes in 2 numbers then adds them and replaces the text on the html document with the result
}

function subtract(A,B) {
    var minus = A - B;
    document.getElementById("Sub").innerHTML = minus; //takes in 2 numbers then subtracts them and replaces the text on the html document with the result
}

function multiplication(A,B) {
    var multiply = A * B;
    document.getElementById("Multi").innerHTML = multiply; //takes in 2 numbers then multiplies them and replaces the text on the html document with the result
}

function divide(A,B) {
    var div = A / B;
    document.getElementById("Divi").innerHTML = div; //takes in 2 numbers then divides them and replaces the text on the html document with the result
}

function more_Math(A,B,C,D,E) {
    var simple_Math = (A + B) * C / D - E;
    document.getElementById("moreMath").innerHTML = simple_Math; //adds 2 numbers then mupliplies the sum by another number, then devides that products by aother number, then finallys subtracts by another number
}

function modulus_Operator(A,B) {
    var remain = A % B;
    document.getElementById("remainder").innerHTML = remain; //takes 2 numbers and gives back a remainder
}

function negation_Operator(A) {
    var neg = A
    document.getElementById("negation").innerHTML = -neg; // takes in a number and gives you tis negative
}

function increment() {
    var start = document.getElementById("increment").innerHTML; //grabs the text in the element that has id increment then adds 1 to it and replaces it with thet new number, subsequent clicks keeps increasing by 1
    start++;
    document.getElementById("increment").innerHTML = start;
}

function decrement() {
    var start = document.getElementById("decrement").innerHTML; //grabs the text in the element that has id decrement then subtracts 1 to it and replaces it with thet new number, subsequent clicks keeps reducing by 1
    start--;
    document.getElementById("decrement").innerHTML = start;
}

window.alert(Math.random()); //alert appears with a number between 0 and 1

window.alert(Math.random()*100) // alert appears with a number between 0 and 100

window.alert(Math.PI) // alert appears with ther value of pi