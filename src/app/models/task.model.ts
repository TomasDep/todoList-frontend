interface IUser {
  uid: string;
}

/**
 * Modelo Tarea
 * @attibute uid: string
 * @attibute name: string
 * @attibute state: boolean
 * @attibute description: string
 * @attibute user: IUser
 */
export class Task {
  public uid: string;
  public name: string;
  public state: boolean;
  public description: string;
  public user: IUser;

  constructor(
    uid: string,
    name: string, 
    state: boolean, 
    description: string,
    user: IUser
  ) {
    this.uid = uid;
    this.name = name;
    this.state = state;
    this.description = description;
    this.user = user;
  }
}