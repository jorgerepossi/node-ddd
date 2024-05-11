export class Order {
	constructor(
		public readonly _id: string,
		public readonly order_id: string,
		public readonly product_id: string,
		public readonly quantity: number,
		public readonly total: number,
		public readonly created_at: Date,
		public readonly updated_at: Date,
	) {}

	static fromData(data: Order): Order | null {
		return new Order(
			data._id,
			data.order_id,
			data.product_id,
			data.quantity,
			data.total,
			data.created_at,
			data.updated_at,
		);
	}
}
