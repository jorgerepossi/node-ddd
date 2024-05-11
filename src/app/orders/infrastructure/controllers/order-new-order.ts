import type { Request, Response } from "express";
import { GenerateNewOrderUseCase } from "../../application/order-generate-new-order.usecase";
import type { Order } from "../../domain/order";

export class OrderNewOrderController {
	constructor(private readonly generateNewOrder: GenerateNewOrderUseCase) {}
	async run(req: Request, res: Response) {
		try {
			const order = req.body;

			const newOrder: Order | null = await this.generateNewOrder.run(order);
			return res.json({ data: { order: newOrder } });
		} catch (error) {
			if (error instanceof Error) {
				return res.status(400).json({ message: error.message });
			}
			return res.status(500).json({ message: "Internal server error 500" });
		}
	}
}
