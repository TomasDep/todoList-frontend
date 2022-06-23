export class User {
  public uid: string;
  public name: string;
  public username: string;
  public password: string;

  constructor(
    uid: string, 
    name: string, 
    username: string, 
    password?: string
  ) {
    this.uid = uid;
    this.name = name;
    this.username = username;
    this.password = password  || '';
  }
}