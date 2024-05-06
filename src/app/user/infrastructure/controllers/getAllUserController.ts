import type { Request, Response } from "express";

import type { GetAllUserUseCase } from "../../application/use-cases/getAllUserUseCase";
import type { UserEntity } from "../../domain/user.entity";
import { UserNotFound } from "../../domain/errors/user-not-found";

export class GetAllUserController {
	constructor(private readonly getAllUserUseCase: GetAllUserUseCase) {}

	async run(_: Request, res: Response): Promise<void> {
		try {
			const users: UserEntity[] = await this.getAllUserUseCase.run();
			res.status(200).json(users);
		} catch (error) {
			if (error instanceof UserNotFound) {
				res.status(404).json({ error: error.message });
				return;
			}
			res.status(500).send();
		}
	}
}
