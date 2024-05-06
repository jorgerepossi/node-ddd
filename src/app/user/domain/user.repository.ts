import type { UserEntity } from "./user.entity";

export interface UserRepository {
	findAllUsers(): Promise<UserEntity[]>;
	findUserByUuid(uuid: string): Promise<UserEntity | null>;
	createUser(user: UserEntity): Promise<UserEntity | null>;
	saveUser(user: UserEntity): Promise<UserEntity>;
	deleteUser(uuid: string): Promise<void>;
}
