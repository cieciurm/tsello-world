"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base = /** @class */ (function () {
    function Base(name) {
        this._name = name;
    }
    Base.prototype.greet = function () {
        console.log(this._name);
    };
    return Base;
}());
exports.Base = Base;
