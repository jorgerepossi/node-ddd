import type { Response, Request } from "express";
import { ProductGetAll } from "../../application/product-get-all";
import { Product } from "../../domain/product";

export class GetAllProductsController {
	constructor(private readonly getAllProducts: ProductGetAll) {}

	async run(req: Request, res: Response) {
		try {
			const product: Product[] = await this.getAllProducts.run();
			res.json(product);
		} catch (error) {
			res.status(500).json({ message: "Internal server error 500" });
		}
	}
}
