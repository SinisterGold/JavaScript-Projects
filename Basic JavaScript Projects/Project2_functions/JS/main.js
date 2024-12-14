function myFunction() {
    var replacement_text = "This text now appears";
    document.getElementById("button_text").innerHTML = replacement_text; //this function looks for the id labelled button_text and the content inside that element is replaced with the string "This text now appears"
}

function myFunction2() {
    var sentance = "I think I am finally";
    sentance += " able to understand how the getElementById works"; //this function is doing 2 main things first it make a variable called sentance with a string that says "I think I am finally" then it uses the += operator on the variable called sentance
    document.getElementById("Concatenate").innerHTML = sentance;    // what this does is say that sentence is now equal to what it was before plus this new sting that states " able to understand how the getElementById works"
}                                                                   //then get element is used and replace the Click Me text in the <p> element on index.html to the variable sentance whic is now "I think I am finally able to understand how the getElementById works"