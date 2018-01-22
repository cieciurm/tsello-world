System.register("data", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Animal, DataProvider;
    return {
        setters: [],
        execute: function () {
            Animal = /** @class */ (function () {
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
            exports_1("Animal", Animal);
            DataProvider = /** @class */ (function () {
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
            exports_1("DataProvider", DataProvider);
        }
    };
});
System.register("example", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Base;
    return {
        setters: [],
        execute: function () {
            Base = /** @class */ (function () {
                function Base(name) {
                    this._name = name;
                }
                Base.prototype.greet = function () {
                    console.log(this._name);
                };
                return Base;
            }());
            exports_2("Base", Base);
        }
    };
});
System.register("main", ["example", "data"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var example_1, data_1, elo, animals;
    return {
        setters: [
            function (example_1_1) {
                example_1 = example_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }
        ],
        execute: function () {
            elo = new example_1.Base("mateusz");
            elo.greet();
            animals = data_1.DataProvider.getAll();
            animals.push({
                name: "witam",
                age: 13337
            });
            animals.forEach(function (element) {
                console.log(element.name + " " + element.age);
            });
        }
    };
});
