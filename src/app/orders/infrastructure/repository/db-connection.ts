import { MongoClient, Db } from "mongodb";

export class DBConnection {
	private client: MongoClient;
	private db: Db | undefined;
	private readonly dbName: string;

	constructor(url: string, dbName: string) {
		this.client = new MongoClient(url);
		this.dbName = dbName;
		this.run()
			.then(() => console.log("--- MongoDB Connected ---"))
			.catch((error) =>
				console.error("--- MongoDB Connection Error ---", error),
			);
	}

	async run(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.client
				.connect()
				.then(() => {
					this.db = this.client.db(this.dbName);
					resolve();
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	async disconnect(): Promise<void> {
		try {
			await this.client.close();
			console.log("Disconnected from MongoDB");
		} catch (error) {
			console.error("Error disconnecting from MongoDB:", error);
			throw error;
		}
	}

	getDatabase() {
		console.log("db", this.db);
		if (!this.db) {
			throw new Error("Database not initialized");
		}
		return this.db;
	}
}
