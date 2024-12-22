function Hello_World() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has charged!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

const a = document.getElementById("myCan");
const atx = a.getContext("2d");

const grd = atx.createLinearGradient(0, 0, 300, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

atx.fillStyle = grd;
atx.fillRect(0, 0, 300, 300);


function displayType(character) {
    var characterType = character.getAttribute("data-character");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}

var ages = [2, 10, 18, 20, 13, 15, 30];

//Using the arrow function to pass in a parameter of age
checkAge = (age) => age >= 18;

/*function checkAge(age) {   this funtion is the exact same as the one above
    check = age >= 18
    return check
} */

function myFunction() {
    //Use the .some() to iterate through the array of ages and display the result.
    document.getElementById("displayAge").innerHTML = ages.some(checkAge);
}