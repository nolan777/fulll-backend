import { Vehicle } from "./vehicle";

export class Fleet {
    private vehicles: Vehicle[] = [];

    constructor(public id: string) { }

    addVehicle(vehicle: Vehicle) {
        this.vehicles.push(vehicle);
    }

    getVehicleById(id: string) {
        return this.vehicles.find((v) => v.id === id);
    }

    hasVehicle(vehicle: Vehicle) {
        return this.vehicles.some((v) => v.id === vehicle.id);
    }
}