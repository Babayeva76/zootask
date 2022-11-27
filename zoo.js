var giraffe = {
    name: "Nigar",
    age: 3,
    amountFood: 6,
    nameOfType: "Nigar",
    biome: "forest",
    reservoir: true,
    area: 20,
    food: "grass",
    isPredator: false
};
var lion = {
    name: "Gullu",
    age: 2,
    amountFood: 5,
    nameOfType: "Gullu",
    biome: "forest",
    reservoir: true,
    area: 30,
    food: "meat",
    isPredator: false
};
var rabbit = {
    name: "Gulceyran",
    age: 1,
    amountFood: 3,
    nameOfType: "Gulceyran",
    biome: "forest",
    reservoir: true,
    area: 10,
    food: "carrot",
    isPredator: true
};
var Gorilla = {
    name: "Kamil",
    age: 1,
    amountFood: 3,
    nameOfType: "Kamil",
    biome: "forest",
    reservoir: true,
    area: 10,
    food: "meat",
    isPredator: false
};
var CageForRabbit = {
    animals: [],
    biome: "forest",
    reservoir: true,
    capacity: 3,
    isForPredator: false
};
function CheckCage(animal, cage) {
    var count = 0;
    if (animal.reservoir == cage.reservoir &&
        animal.biome == cage.biome &&
        animal.isPredator == cage.isForPredator) {
        for (var j = 0; j < cage.animals.length; j++) {
            count = count + 1;
        }
        if (cage.capacity > count) {
            cage.animals.push(animal);
            ShowAllNamesInCage(cage);
        }
        else {
            console.log("there aren't enough space in this cage");
        }
    }
    else {
        console.log("This cage is not available for  -".concat(animal.name, "-  animal"));
    }
}
function ShowAllNamesInCage(cage) {
    for (var i = 0; i < cage.animals.length; i++) {
        console.log(cage.animals[i].name);
    }
}
