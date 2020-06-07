"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleDescription = exports.BicycleColor = exports.BicycleFrameMaterial = void 0;
// illustrating a nested structure and other TypeScript features
// I have no expertise with bicycles so this is gonna be a not amazing interface
var BicycleFrameMaterial;
(function (BicycleFrameMaterial) {
    BicycleFrameMaterial[BicycleFrameMaterial["ALUMINUM"] = 0] = "ALUMINUM";
    BicycleFrameMaterial[BicycleFrameMaterial["STEEL"] = 1] = "STEEL";
    BicycleFrameMaterial[BicycleFrameMaterial["IRON"] = 2] = "IRON";
    BicycleFrameMaterial[BicycleFrameMaterial["TITANIUM"] = 3] = "TITANIUM";
    BicycleFrameMaterial[BicycleFrameMaterial["BALEEN"] = 4] = "BALEEN";
    BicycleFrameMaterial[BicycleFrameMaterial["CARBON_FIBER"] = 5] = "CARBON_FIBER";
})(BicycleFrameMaterial || (BicycleFrameMaterial = {}));
exports.BicycleFrameMaterial = BicycleFrameMaterial;
var BicycleColor;
(function (BicycleColor) {
    BicycleColor[BicycleColor["BLUE"] = 0] = "BLUE";
    BicycleColor[BicycleColor["YELLOW"] = 1] = "YELLOW";
    BicycleColor[BicycleColor["SALMON"] = 2] = "SALMON";
})(BicycleColor || (BicycleColor = {}));
exports.BicycleColor = BicycleColor;
var BicycleDescription = /** @class */ (function () {
    function BicycleDescription() {
    }
    return BicycleDescription;
}());
exports.BicycleDescription = BicycleDescription;
