import type { ProductRepository } from "../domain/product-repository";
import type { Product } from "../domain/product";

export class ProductDeleteById {
	constructor(private readonly productRepository: ProductRepository) {}

	async run(uuid: string): Promise<Product | null> {
		const product: Product | null =
			await this.productRepository.deleteById(uuid);
		if (!product) {
			throw new Error(`Product with id ${uuid} not found`);
		}
		return product;
	}
}
