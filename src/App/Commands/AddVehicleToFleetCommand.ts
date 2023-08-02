import { Vehicle } from "../../Domain/models/vehicle";

export class AddVehicleToFleetCommand {
    constructor(public fleetId: string, public vehicle: Vehicle) { }

    public validate() {
        if (!this.fleetId) {
            throw new Error('Fleet id is required.');
        }

        if (!this.vehicle) {
            throw new Error('Vehicle is required.');
        }
    }

    public static create(fleetId: string, vehicle: Vehicle) {
        const command = new AddVehicleToFleetCommand(fleetId, vehicle);
        command.validate();
        return command;
    }

}