import { Order } from "../../domain/order";
import { DBConnection } from "./db-connection";
import { ObjectId } from "mongodb";

import { OrderRepository } from "../../domain/order-repository";

export class OrderMongoRepositoryImpl implements OrderRepository {
	constructor(private dbConnection: DBConnection) {}

	async findAll(): Promise<(Order | null)[]> {
		try {
			const result = await this.dbConnection
				.getDatabase()
				.collection("orders")
				.find()
				.toArray();
			return result.map((orderData: any) => Order.fromData(orderData)) || [];
		} catch (error) {
			console.error(error);
			return [];
		}
	}

	async findById(orderId: string): Promise<Order | null> {
		try {
			const result = await this.dbConnection
				.getDatabase()
				.collection("orders")
				.findOne({ _id: new ObjectId(orderId) });
			return result ? Order.fromData(result as any) : null;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	async save(order: Order): Promise<Order> {
		try {
			const orderDocument = { ...order, _id: new ObjectId() };
			await this.dbConnection
				.getDatabase()
				.collection("orders")
				.insertOne(orderDocument);

			return order;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async update(order: Order): Promise<Order> {
		try {
			await this.dbConnection
				.getDatabase()
				.collection("orders")
				.updateOne({ _id: new ObjectId(order._id) }, { $set: order });
			return order;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async deleteById(orderId: string): Promise<void> {
		try {
			await this.dbConnection
				.getDatabase()
				.collection("orders")
				.deleteOne({ _id: new ObjectId(orderId) });
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async findByOrderId(productId: string): Promise<Order | null> {
		try {
			const result = await this.dbConnection
				.getDatabase()
				.collection("orders")
				.findOne({ product_id: productId });
			return result ? Order.fromData(result as any) : null;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}
