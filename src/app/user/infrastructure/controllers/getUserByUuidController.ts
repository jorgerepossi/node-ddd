import type { Request, Response } from "express";

import type { GetUserByIdUseCase } from "../../application/use-cases/getUserByIdUseCase";
import type { UserEntity } from "../../domain/user.entity";
import { UserNotFound } from "../../domain/errors/user-not-found";

export class GetUserByUuidController {
	constructor(private readonly getUserByUuidUseCase: GetUserByIdUseCase) {}

	async run(req: Request, res: Response): Promise<void> {
		try {
			const id: string = req.params.id;
			const user: UserEntity = await this.getUserByUuidUseCase.run(id);
			res.status(200).json(user);
		} catch (error) {
			if (error instanceof UserNotFound) {
				res.status(404).json({ error: error.message });
				return;
			}
			res.status(500).send();
		}
	}
}
