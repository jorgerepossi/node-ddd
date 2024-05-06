export class ErrorCreatedUser extends Error {
	constructor() {
		super("User not created");
		this.name = "ErrorCreatedUser";
	}
}
