import { MailtrapMailProvider } from "src/providers/implementations/MailtrapMailProvider";
import { MongoDbUsersRepository } from "src/repositories/implementations/MongoDbUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailTrapProvider = new MailtrapMailProvider();
const mongoDB = new MongoDbUsersRepository();


const createUserUseCase = new CreateUserUseCase(
  mongoDB,
  mailTrapProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export {
  createUserUseCase,
  createUserController
}
