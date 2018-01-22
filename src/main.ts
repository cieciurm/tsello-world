import { Base } from "./example";
import { Animal, DataProvider } from "./data"

let elo = new Base("mateusz");
elo.greet();

let animals = DataProvider.getAll();

animals.push(<Animal>{
    name: "witam",
    age: 13337
});

animals.forEach(element => {
    console.log(`${element.name} ${element.age}`)
});