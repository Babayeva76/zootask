interface Type {
  nameOfType: string;
  biome: string;
  reservoir: boolean;
  area: number;
  food: string;
  isPredator: boolean;
}
interface Animal extends Type {
  name: string;
  age: number;
  amountFood: number;
}
interface Settlement {
  animals: Animal[];
  biome: string;
  reservoir: boolean;
  capacity: number;
  isForPredator: boolean;
}
let giraffe: Animal = {
  name: "Nigar",
  age: 3,
  amountFood: 6,
  nameOfType: "Nigar",
  biome: "forest",
  reservoir: true,
  area: 20,
  food: "grass",
  isPredator: false,
};
let lion: Animal = {
  name: "Gullu",
  age: 2,
  amountFood: 5,
  nameOfType: "Gullu",
  biome: "forest",
  reservoir: true,
  area: 30,
  food: "meat",
  isPredator: false,
};
let rabbit: Animal = {
  name: "Gulceyran",
  age: 1,
  amountFood: 3,
  nameOfType: "Gulceyran",
  biome: "forest",
  reservoir: true,
  area: 10,
  food: "carrot",
  isPredator: true,
};
let Gorilla: Animal = {
  name: "Kamil",
  age: 1,
  amountFood: 3,
  nameOfType: "Kamil",
  biome: "forest",
  reservoir: true,
  area: 10,
  food: "meat",
  isPredator: false,
};
let CageForRabbit: Settlement = {
  animals: [],
  biome: "forest",
  reservoir: true,
  capacity: 3,
  isForPredator: false,
};
function CheckCage(animal: Animal, cage: Settlement) {
  let count: number = 0;
  if (
    animal.reservoir == cage.reservoir &&
    animal.biome == cage.biome &&
    animal.isPredator == cage.isForPredator
  ) {
    for (let j = 0; j < cage.animals.length; j++) {
      count = count + 1;
    }
    if (cage.capacity > count) {
      cage.animals.push(animal);
      ShowAllNamesInCage(cage);
    } else {
      console.log("there aren't enough space in this cage");
    }
  } else {
    console.log(`This cage is not available for  -${animal.name}-  animal`);
  }
}
function ShowAllNamesInCage(cage: Settlement) {
  for (let i = 0; i < cage.animals.length; i++) {
    console.log(cage.animals[i].name);
  }
}
