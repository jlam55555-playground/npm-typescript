import {Bicycle, BicycleDescription} from "../bicycle";

// sorry about this terrible interpretation of a bike
export class MountainBike implements Bicycle {
    description: BicycleDescription;

    currentGear: number = 0;
    currentSpeed: number = 0;

    constructor(description: BicycleDescription) {
        this.description = description;
    }

    getDescription = () => this.description;
    getCurrentGear = () => this.currentGear;
    getCurrentSpeed = () => this.currentSpeed;

    brake = (brakeFirmness: number) => {
        this.currentSpeed -= brakeFirmness * this.currentGear;
        if(this.currentSpeed < 0)
            this.currentSpeed = 0;
        return this;
    };
    pedal = (pedalSpeed: number) => {
        this.currentSpeed += pedalSpeed * this.currentGear;
        return this;
    };

    changeGear = (gearDelta: number) => {
        this.currentGear += gearDelta;
        if(this.currentGear > this.description.gears)
            this.currentGear = this.description.gears;
        else if(this.currentGear < 0)
            this.currentGear = 0;
        return this;
    }
}
