//concat() Method
function full_sentence() {
    var p1 = "I have ";
    var p2 = "made this ";
    var p3 = "into a ";
    var p4 = "complete sentence.";
    var whole = p1.concat(p2, p3,p4);
    document.getElementById("concat").innerHTML = whole;
}

//slice() Method
function slice_function() {
    var sentence = "Man is not worried by real problems so much as by his imagined anxieties about real problems."
    var section = sentence.slice(22,26);
    document.getElementById("slice").innerHTML = section;
}

//toUpperCase() Method
function upper_function() {
    var sentence = "Man is not worried by real problems so much as by his imagined anxieties about real problems."
    var upper = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}

//search() Method
function search_function() {
    var sentence = "Man is not worried by real problems so much as by his imagined anxieties about real problems."
    var find = sentence.search("is");
    document.getElementById("search").innerHTML = find;
}

//toString() Method
function string_function() {
    var X = 525600
    document.getElementById("num_to_string").innerHTML = X.toString() + " minutes how do you measure the time in a year!"
}

//toPrecision() Method 
function precision_function() {
    var X = 12938.3012987376112;
    document.getElementById("sigfig").innerHTML = X.toPrecision(10);
}

//toFixed() Method
function fixed_function() {
    var X = 144.3678;
    document.getElementById("round").innerHTML = X.toFixed(2);
}

//valueOf() Method
function value_function() {
    var text = "21 Savage says: Hello World!"
    document.getElementById("value").innerHTML = text.valueOf();
}