let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

let string = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {continue; }
    string += "This number is " + i +"<br>";
}
document.getElementById("continue").innerHTML = string;