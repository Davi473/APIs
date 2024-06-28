// src/controllers/UserController.js
import { UserModel } from '../Model/UserModel.js';
import ApiService from '../services/ApiService';

class UserController {
  static async fetchUsers() {
    const response = await ApiService.get('/users');
    return response.data.map(UserModel.fromApi);
  }
}

export default UserController;
