import { Bicycle, BicycleDescription } from "../bicycle";
export declare class MountainBike implements Bicycle {
    description: BicycleDescription;
    currentGear: number;
    currentSpeed: number;
    constructor(description: BicycleDescription);
    getDescription: () => BicycleDescription;
    getCurrentGear: () => number;
    getCurrentSpeed: () => number;
    brake: (brakeFirmness: number) => this;
    pedal: (pedalSpeed: number) => this;
    changeGear: (gearDelta: number) => this;
}
