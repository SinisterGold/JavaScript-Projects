function Call_Loop() {
    var Digit = "";
    var counter = 1;
    while (X < 11) {
        Digit +="<br>" + counter;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length_function() {
    var string = document.getElementById("string").textContent; //.textContent gets the content within the id and saves it
    var result = string.length;
    document.getElementById("result").innerHTML = result;
}

function for_Loop() {
    var Instruments = ["Electric Guitar", "Drum Set", "Violin", "Harp", "Flute"];
    var Lister = ""
    var Counter;
    for (Counter = 0; Counter < Instruments.length; Counter++) {
        Lister += Instruments[Counter] + "<br>";
    }
    document.getElementById("Instrument_list").innerHTML = Lister;
}

function array_function() {
    var Car = [];
    Car[0] = "Porshe 911 Turbo";
    Car[1] = "Dodge Viper";
    Car[2] = "MK4 Supra";
    Car[3] = "Lotus Elise"
    document.getElementById("Array").innerHTML = "One of my favorite cars is "+ Car[2] + ".";
}

function constant_function() {
    const animal = {species: "dog", color: "blonde", type: "Golden Retriver"};
    animal.name = "Sam";
    animal.species ="cat";
    animal.type = "Tabby";
    document.getElementById("Constant").innerHTML = "I have a " + animal.species + " named " + animal.name;
}

function let_function() {
    var X = 5;
    document.write(X + "<br>");
    {
        let X = 144;
        document.write(X + "<br>");
    }
    document.write(X);
}

let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
    }
};

// Ensure there is an element with id "Car_Object" in your HTML
document.getElementById("Car_Object").innerHTML = car.description();