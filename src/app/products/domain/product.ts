export class Product {
	/* take the class and put into a repository abstract class  */
	constructor(
		public readonly id: string,
		public readonly uuid: string,
		public readonly name: string,
		public readonly price: number,
	) {}

	static fromData(data: Product): Product {
		return new Product(data.id, data.uuid, data.name, data.price);
	}
}
