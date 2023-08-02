import { Localization } from "../../Domain/models/localization";

export class ParkVehicleCommand {
    constructor(public fleetId: string, public vehicleId: string, public localization: Localization) { }

    public validate() {
        if (!this.fleetId) {
            throw new Error('Fleet id is required.');
        }

        if (!this.vehicleId) {
            throw new Error('Vehicle id is required.');
        }

        if (!this.localization) {
            throw new Error('Localization is required.');
        }
    }

    public static create(fleetId: string, vehicleId: string, localization: Localization) {
        const command = new ParkVehicleCommand(fleetId, vehicleId, localization);
        command.validate();
        return command;
    }
}