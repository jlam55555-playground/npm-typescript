"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainBike = void 0;
// sorry about this terrible interpretation of a bike
var MountainBike = /** @class */ (function () {
    function MountainBike(description) {
        var _this = this;
        this.currentGear = 0;
        this.currentSpeed = 0;
        this.getDescription = function () { return _this.description; };
        this.getCurrentGear = function () { return _this.currentGear; };
        this.getCurrentSpeed = function () { return _this.currentSpeed; };
        this.brake = function (brakeFirmness) {
            _this.currentSpeed -= brakeFirmness * _this.currentGear;
            if (_this.currentSpeed < 0)
                _this.currentSpeed = 0;
            return _this;
        };
        this.pedal = function (pedalSpeed) {
            _this.currentSpeed += pedalSpeed * _this.currentGear;
            return _this;
        };
        this.changeGear = function (gearDelta) {
            _this.currentGear += gearDelta;
            if (_this.currentGear > _this.description.gears)
                _this.currentGear = _this.description.gears;
            else if (_this.currentGear < 0)
                _this.currentGear = 0;
            return _this;
        };
        this.description = description;
    }
    return MountainBike;
}());
exports.MountainBike = MountainBike;
