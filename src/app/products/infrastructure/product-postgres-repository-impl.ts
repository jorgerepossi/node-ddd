import dotenv from "dotenv";

import type { ProductRepository } from "../domain/product-repository";
import { Product } from "../domain/product";
import { PoolClient } from "pg";
import { DBConnection } from "./db-connection";

import uniqid from "uniqid";

export class ProductPostgresRepositoryImpl implements ProductRepository {
	private dbConnection: DBConnection;

	constructor(dbConnection: DBConnection) {
		this.dbConnection = dbConnection;
	}

	async findAll(): Promise<Product[]> {
		const client: PoolClient = await this.dbConnection.getClient();
		try {
			const result = await client.query("SELECT * FROM products");
			const productsData: Product[] = result.rows;
			return productsData.map((productData: Product) =>
				Product.fromData(productData),
			);
		} catch (error) {
			console.error(error);
		} finally {
			client.release();
		}
		return [];
	}

	async findById(id: string): Promise<Product | null> {
		const client: PoolClient = await this.dbConnection.getClient();
		try {
			const result = await client.query(
				"SELECT * FROM products WHERE id = $1",
				[id],
			);
			if (result.rows.length === 0) {
				return null;
			}
			const productData: Product = result.rows[0];
			return Product.fromData(productData);
		} finally {
			client.release();
		}
	}

	async save(product: Product): Promise<Product> {
		const client: PoolClient = await this.dbConnection.getClient();

		try {
			const uuid = uniqid();
			await client.query(
				"INSERT INTO products ( uuid, name, price) VALUES ($1, $2, $3)",
				[uuid, product.name, product.price],
			);
		} finally {
			client.release();
		}
		return Promise.resolve(product);
	}

	async deleteById(uuid: string): Promise<Product | null> {
		const client: PoolClient = await this.dbConnection.getClient();
		try {
			const result = await client.query(
				"DELETE FROM products WHERE uuid = $1",
				[uuid],
			);
			if (result.rows.length === 0) {
				return null;
			}
		} finally {
			client.release();
		}
		return null;
	}

	update(product: Product): Promise<void> {
		return Promise.resolve(undefined);
	}
}
