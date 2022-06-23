interface IUser {
  uid: string;
}

export class Task {
  public name: string;
  public state: boolean;
  public description: string;
  public user: IUser;

  constructor(
    name: string, 
    state: boolean, 
    description: string,
    user: IUser
  ) {
    this.name = name;
    this.state = state;
    this.description = description;
    this.user = user;
  }
}