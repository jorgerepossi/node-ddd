import type { ProductRepository } from "../domain/product-repository";

import type { Product } from "../domain/product";

export class SaveNewProduct {
	constructor(private readonly productRepository: ProductRepository) {}

	async run(product: Product): Promise<Product> {
		const newProduct: Product = await this.productRepository.save(product);
		if (!newProduct) {
			throw new Error("Product not saved");
		}
		return newProduct;
	}
}
