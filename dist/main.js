"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloSayer = void 0;
// very simple typescript file to import
var HelloSayer = /** @class */ (function () {
    function HelloSayer() {
    }
    HelloSayer.prototype.sayHello = function () {
        console.log('Hello, world! from npm-typescript package');
    };
    return HelloSayer;
}());
exports.HelloSayer = HelloSayer;
