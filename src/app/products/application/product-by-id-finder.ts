import type { ProductRepository } from "../domain/product-repository";

import { NotFound } from "../domain/not-found";
import { Product } from "../domain/product";

export class ProductByIdFinder {
	constructor(private readonly productRepository: ProductRepository) {}
	async run(id: string): Promise<Product | null> {
		const product: Product | null = await this.productRepository.findById(id);
		if (!product) {
			throw new NotFound(id);
		}
		return product;
	}
}
