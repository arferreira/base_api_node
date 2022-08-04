import { v4 as uuidV4 } from 'uuid';

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;


  constructor(propos: Omit<User, 'id'>, id?: string) {
    Object.assign(this, propos);

    if (!id) {
      this.id = uuidV4();
    }
  }
}