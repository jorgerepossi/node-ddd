import type { Response, Request } from "express";

import { Order } from "../../domain/order";
import { OrderFindAllUseCase } from "../../application/order.find-all.usecase";

// received from the application and application layer
export class OrderFindByIdController {
	constructor(private readonly orderFindAll: OrderFindAllUseCase) {}

	async run(_: Request, res: Response) {
		try {
			const order: Order[] | null = await this.orderFindAll.run();
			res.json({ data: { order: order } });
		} catch (error) {
			res.status(500).json({ message: "Internal server error 500" });
		}
	}
}
