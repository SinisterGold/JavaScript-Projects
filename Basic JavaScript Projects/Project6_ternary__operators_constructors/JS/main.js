function Ride_Function() { //Ternary Operator that checks if value is less then 52. if it is it says You are too short. otherwise you are tall enough
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Vote_Function() { //Another Ternary operator but this one checks if age is over 18 and if not prints you are to you
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

//This functions Makes a vehicle when given 4 inputs
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//Here we are making Vehcile objects by calling the function above and use "new". We are al;so providing the 4 inputs needed
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//this funtion replaces the paragraph text on index html with id "Keywords_and Contructors" with informtion from vehicle object of Erik
//this function need no iputs because it will only spit out this result
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//New keyword assignment (asked to unilize "new")
var Ray = new Vehicle("Lamborghini", "Huracan Tecnica", 2024, "Lime Green");

function dreamCar() {
    document.getElementById("New_and_This").innerHTML =
    "My Dream Car is a "+ Ray.Vehicle_Year+" "+ Ray.Vehicle_Color+" " + Ray.Vehicle_Make+" " + Ray.Vehicle_Model;
}

//making a variable using a reserved word
//when i do this it seems to make everything on the page stop working non of the buttons work anymore.
//****if = 10;
//****document.write(if == 5);

//my object constructor function
function DnDCharacter(Race, Class, Level, Faction) {
    this.Characters_Race = Race;
    this.Characters_Class = Class;
    this.Characters_Level = Level;
    this.Characters_Faction = Faction;
}

function countFunction() { //all this function does is paste the result in the index.html
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() { // this function contains a variable and another function
        var Starting_point = 99; //variable of value 99
        function plus_one() {Starting_point += 1;} //this funtion will take the variable and add 1 NOTE X += Y is the same as X = X + Y
        plus_one(); //this says run the plus_one() function
        return Starting_point; //this says after you ran the function above keep the new value of starting point which is now 100 and return it
    }                          //since plus_one is nested inside count. The valuse rturned to Count is 100
}                              // therefore document.getElementById("Nested_Function").innerHTML = 100 and that is then displayed in index.html