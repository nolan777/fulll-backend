import { AddVehicleToFleetCommand } from "../../App/Commands/AddVehicleToFleetCommand";
import { CreateFleetCommand } from "../../App/Commands/CreateFleetCommand";
import { ParkVehicleCommand } from "../../App/Commands/ParkVehicleCommand";
import { Fleet } from "../models/fleet";

export class FleetAggregate {
    private fleets: Fleet[] = [];

    constructor() { }

    createFleet(command: CreateFleetCommand) {
        const fleet = new Fleet(command.id);
        this.fleets.push(fleet);
    }

    getFleetById(id: string) {
        return this.fleets.find((f) => f.id === id);
    }

    addVehicleToFleet(command: AddVehicleToFleetCommand) {
        const fleet = this.fleets.find((f) => f.id === command.fleetId);
        if (!fleet) {
            throw new Error('Fleet not found.');
        }

        if (fleet.hasVehicle(command.vehicle)) {
            throw new Error('Vehicle already registered in the fleet.');
        }

        fleet.addVehicle(command.vehicle);
    }

    parkVehicle(command: ParkVehicleCommand) {
        const fleet = this.fleets.find((f) => f.id === command.fleetId);
        if (!fleet) {
            throw new Error('Fleet not found.');
        }

        const vehicle = fleet.getVehicleById(command.vehicleId);
        if (!vehicle) {
            throw new Error('Vehicle not found in the fleet.');
        }

        vehicle.setParkingLocalization(command.localization);
    }
}