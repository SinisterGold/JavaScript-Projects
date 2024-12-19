function car_function() {
    var car_output;
    var car = document.getElementById("car").value;
    var car_string = " is a great car!";
    switch(car) {
        case "Dodge Viper":
            car_output = "Dodge Viper" + car_string;
        break;
        case "Ford GTO":
            car_output = "Ford GTO" + car_string;
        break;
        default:
            car_output = "Please enter a car exactly as written on the above list.";

    }
    document.getElementById("output").innerHTML = car_output;

}