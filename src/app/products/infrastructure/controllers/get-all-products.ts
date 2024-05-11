import type { Response, Request } from "express";
import type { ProductGetAll } from "../../application/product-get-all";
import type { Product } from "../../domain/product";

export class GetAllProductsController {
	constructor(private readonly getAllProducts: ProductGetAll) {}

	async run(_: Request, res: Response) {
		try {
			const product: Product[] = await this.getAllProducts.run();
			res.json({ data: { product: product } });
		} catch (error) {
			res.status(500).json({ message: "Internal server error 500" });
		}
	}
}
