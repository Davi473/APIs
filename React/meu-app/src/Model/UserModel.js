
import Web from './Web.js';

// src/models/UserModel.js
export class UserModel 
{
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
  }

  static fromApi(data) {
    return new UserModel({
      id: data.id,
      name: data.name,
      email: data.email
    });
  }
}
  