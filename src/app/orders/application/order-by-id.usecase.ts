import type { OrderRepository } from "../domain/order-repository";
import { Order } from "../domain/order";

// received from the domain layer
export class OrderFindByIdUseCase {
	constructor(private readonly orderFindById: OrderRepository) {}

	async run(orderId: string): Promise<Order | null> {
		const order: Order | null = await this.orderFindById.findById(orderId);
		if (!orderId) {
			throw new Error("Order not found");
		}
		return order;
	}
}
