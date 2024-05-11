import { OrderRepository } from "../domain/order-repository";
import { Order } from "../domain/order";

// received from the controller
export class OrderFindAllUseCase {
	constructor(private readonly orderFindAll: OrderRepository) {}

	async run(): Promise<Order[] | null> {
		const orders: (Order | null)[] = await this.orderFindAll.findAll();
		if (!orders) {
			throw new Error("Order not found");
		}
		return orders as Order[];
	}
}
