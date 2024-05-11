import type { Response, Request } from "express";

import type { ProductByIdFinder } from "../../application/product-by-id-finder";
import type { Product } from "../../domain/product";
import { NotFound } from "../../domain/not-found";

export class ProductByIdFinderController {
	constructor(private readonly productByIdFinder: ProductByIdFinder) {}

	async run(req: Request, res: Response) {
		try {
			const id: string = req.params.id;
			const product: Product | null = await this.productByIdFinder.run(id);
			res.json({ data: product });
		} catch (error) {
			if (error instanceof NotFound) {
				res.status(404).json({ message: error.message });
				return;
			}

			res.status(500).json({ message: "Internal server error 500" });
		}
	}
}
