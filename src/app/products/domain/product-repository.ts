// ProductRepository interface to define the methods that the repository must implement
import type { Product } from "./product";

export interface ProductRepository {
	findAll(): Promise<Product[]>;
	findById(id: string): Promise<Product | null>;
	save(product: Product): Promise<Product>;

	deleteById(uuid: string): Promise<Product | null>;
	update(product: Product): Promise<void>;
}
