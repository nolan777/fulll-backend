import { Localization } from "./localization";

export class Vehicle {
    constructor(public id: string, public type: string, private parkingLocalization: Localization | null = null) { }

    setParkingLocalization(localization: Localization) {
        this.parkingLocalization = localization;
    }

    getParkingLocalization() {
        return this.parkingLocalization;
    }
}