"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
var DataProvider = /** @class */ (function () {
    function DataProvider() {
    }
    DataProvider.getAll = function () {
        return [
            new Animal("Reksio", 21),
            new Animal("Pimpek", 3),
            new Animal("Puchatek", 5)
        ];
    };
    return DataProvider;
}());
exports.DataProvider = DataProvider;
