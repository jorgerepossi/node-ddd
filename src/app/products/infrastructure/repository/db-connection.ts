import { Pool, type PoolClient } from "pg";

export class DBConnection {
	private pool: Pool;

	constructor() {
		this.pool = new Pool({
			host: process.env.DB_HOST || "",
			user: process.env.DB_USER || "",
			password: process.env.DB_PASS || "",
			database: process.env.DB_NAME || "postgres",
			port: Number(process.env.DB_PORT || 5432),
		});
	}

	async getClient(): Promise<PoolClient> {
		return this.pool.connect();
	}
}
