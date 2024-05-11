import { OrderRepository } from "../domain/order-repository";
import { Order } from "../domain/order";

export class GenerateNewOrderUseCase {
	constructor(private readonly orderGenerateNewOrder: OrderRepository) {}
	async run(order: Order): Promise<Order | null> {
		const newOrder: Order | null = await this.orderGenerateNewOrder.save(order);
		if (!order) {
			throw new Error("Order not found");
		}
		return newOrder;
	}
}
