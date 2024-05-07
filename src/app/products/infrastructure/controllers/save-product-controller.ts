import type { Response, Request } from "express";

import { Product } from "../../domain/product";

import { SaveNewProduct } from "../../application/save-new-product";

export class SaveProductController {
	constructor(private readonly saveProduct: SaveNewProduct) {}

	async run(req: Request, res: Response) {
		try {
			const product: Product = req.body;
			const newProduct: Product = await this.saveProduct.run(product);
			res.json(newProduct);
		} catch (error) {
			res.status(500).json({ message: "Internal server error 500" });
		}
	}
}
