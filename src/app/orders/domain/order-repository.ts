import { Order } from "./order";

export interface OrderRepository {
	findAll(): Promise<(Order | null)[]>;
	findById(orderId: string): Promise<Order | null>;
	findByOrderId(productId: string): Promise<Order | null>;
	save(order: Order): Promise<Order | null>;
	update(order: Order): Promise<Order>;
	deleteById(orderId: string): Promise<void>;
}
