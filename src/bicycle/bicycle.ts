// illustrating a nested structure and other TypeScript features
// I have no expertise with bicycles so this is gonna be a not amazing interface
enum BicycleFrameMaterial {
    ALUMINUM,
    STEEL,
    IRON,
    TITANIUM,
    BALEEN,
    CARBON_FIBER
}

enum BicycleColor {
    BLUE,
    YELLOW,
    SALMON
}

class BicycleDescription {
    gears: number;
    cost: number;
    material: BicycleFrameMaterial;
    color: BicycleColor;
}

interface Bicycle {
    // bike description and getter
    description: BicycleDescription;
    getDescription: () => BicycleDescription;

    // operating characteristics of bike
    currentGear: number;
    currentSpeed: number;

    // get/set operating characteristics of bike
    // setters return this to make for fluent api
    changeGear: (gearDelta: number) => this;
    getCurrentGear: () => number;
    pedal: (pedalSpeed: number) => this;
    brake: (brakeFirmness: number) => this;
    getCurrentSpeed: () => number;
}

export { BicycleFrameMaterial, BicycleColor, BicycleDescription, Bicycle };
