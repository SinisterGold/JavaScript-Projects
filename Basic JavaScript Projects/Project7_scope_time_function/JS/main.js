var X = 10;

function test() {
    Y = X + 4;
    document.write(Y + "<br>");
}

function test2() {
    Y = X * X;
    document.write(Y + "<br>");
}

test();
test2();


function test3() {
    var M = 2;
    console.log(M+4);
}

function test4() {
    console.log(M*42);
}

test3();
test4();

function workday(){
    if ( new Date().getHours() > 17) {
        document.getElementById("workday").innerHTML = "Mom should have finished work by now"
    }
    
    else document.getElementById("workday").innerHTML = "Mom is still working"
}

function Age_Function(){
    Age = document.getElementById("Age").value;
    if (Age < 21) {
        Alcohol = "You are too your to purchase alcohol"
    }
    else {
        Alcohol = "You are able to purchase alcohol"
    }
    document.getElementById("Result").innerHTML = Alcohol;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}