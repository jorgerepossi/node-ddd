import { UserRepository } from "../../domain/user.repository";
import { UserEntity } from "../../domain/user.entity";
import { UserValue } from "../../domain/user.value";
import { ErrorCreatedUser } from "../../domain/errors/error-created-user";

export class CreateUserUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async run({ uuid, name, email }: UserValue): Promise<UserEntity> {
		const newUser = new UserValue({ uuid, name, email });
		const addNew = await this.userRepository.createUser(newUser);
		if (!addNew) {
			throw new ErrorCreatedUser();
		}
		return addNew;
	}
}
