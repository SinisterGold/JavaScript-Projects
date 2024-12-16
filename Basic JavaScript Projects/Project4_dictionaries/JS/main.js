function my_Dictionary() {
    var Animal = {
        Species: "Reptile",
        Color: "Dark Green",
        Breed: "Spectacled Caiman",
        Age: 30,
        Sound: "Growl"
    };
    delete Animal.Breed //deletes the breed entry in my animal object
    document.getElementById("Dictionary").innerHTML = Animal.Breed; //replaces the text in main.html witht eh KVP of breed; however since it was deleted above it will state undefined
}