document.write(typeof 8); //the typeof tell you want the item is that comes after it. Since 8 is a number document.write(typeof 8) will write number in the body of the document
document.write("1000"+456); // will write 1000456 as it will teat both as text


function NaNorNot() {
    document.getElementById("NAN").innerHTML = "Hello"/0; //NAN FUNCTION
}

function NaNorNot2() {
    document.getElementById("NAN2").innerHTML = isNaN("Hello"); //IS NAN FUCNTION
}

function NaNorNot3() {
    document.getElementById("NAN3").innerHTML = isNaN(256); //IS NAN FUCNTION
}

function NaNorNot4() {
    document.getElementById("NAN4").innerHTML = document.write(4E310); //INFNITY FUCNTION
}

function NaNorNot5() {
    document.getElementById("NAN5").innerHTML = document.write(-4E310); // NEGATIVE INFNITY FUNCTION
}

function NaNorNot6() {
    document.getElementById("NAN6").innerHTML = document.write(10>2); //TRUE
}

function NaNorNot7() {
    document.getElementById("NAN7").innerHTML = document.write(10<2); //FALSE
}

console.log(2+3); //CONSOLE OPERATIONS
console.log(10<2);

document.write("E"==10);
document.write(100== 10*10);

// === FUNCTIONS
function NaNorNot8() {
    A = 10;
    B = 10;
    document.getElementById("NAN8").innerHTML = A === B;
}

function NaNorNot9() {
    A = "1";
    B = 10;
    document.getElementById("NAN9").innerHTML = A === B;
}

function NaNorNot10() {
    A = "10";
    B = 10;
    document.getElementById("NAN10").innerHTML = A === B;
}

function NaNorNot11() {
    A = 4;
    B = 10;
    document.getElementById("NAN11").innerHTML = A === B;
}

document.write(10>2 && 5>3); // AND true

document.write(10>2 && 5<3); // AND false

document.write(10>2 || 70>3); // OR true

document.write(10<2 || 70<3); // OR false

function not_fun() {
    document.getElementById("Not").innerHTML = !(20 > 10); //The ! (not) operator checks whether or not something is true. If ___ is false, “true” will be returned.
}

function not_fun2() {
    document.getElementById("Not2").innerHTML = !(20 < 10);
}