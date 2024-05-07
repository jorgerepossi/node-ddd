export class NotFound {
	constructor(public readonly id: string) {
		this.id = id;
	}

	public readonly message = `Product with id ${this.id} not found`;
}
