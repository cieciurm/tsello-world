"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var example_1 = require("./example");
var data_1 = require("./data");
var elo = new example_1.Base("mateusz");
elo.greet();
var animals = data_1.DataProvider.getAll();
animals.push({
    name: "witam",
    age: 13337
});
animals.forEach(function (element) {
    console.log(element.name + " " + element.age);
});
