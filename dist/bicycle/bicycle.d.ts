declare enum BicycleFrameMaterial {
    ALUMINUM = 0,
    STEEL = 1,
    IRON = 2,
    TITANIUM = 3,
    BALEEN = 4,
    CARBON_FIBER = 5
}
declare enum BicycleColor {
    BLUE = 0,
    YELLOW = 1,
    SALMON = 2
}
declare class BicycleDescription {
    gears: number;
    cost: number;
    material: BicycleFrameMaterial;
    color: BicycleColor;
}
interface Bicycle {
    description: BicycleDescription;
    getDescription: () => BicycleDescription;
    currentGear: number;
    currentSpeed: number;
    changeGear: (gearDelta: number) => this;
    getCurrentGear: () => number;
    pedal: (pedalSpeed: number) => this;
    brake: (brakeFirmness: number) => this;
    getCurrentSpeed: () => number;
}
export { BicycleFrameMaterial, BicycleColor, BicycleDescription, Bicycle };
