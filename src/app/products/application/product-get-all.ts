import type { ProductRepository } from "../domain/product-repository";

import { Product } from "../domain/product";

export class ProductGetAll {
	constructor(private readonly productRepository: ProductRepository) {}
	async run(): Promise<Product[]> {
		const product: Product[] = await this.productRepository.findAll();
		if (!product) {
			throw new Error("Product not found");
		}
		return product;
	}
}
