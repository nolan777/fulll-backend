export class CreateFleetCommand {
    constructor(public id: string) { }

    public validate() {
        if (!this.id) {
            throw new Error('Fleet id is required.');
        }
    }

    public static create(id: string) {
        const command = new CreateFleetCommand(id);
        command.validate();
        return command;
    }
}