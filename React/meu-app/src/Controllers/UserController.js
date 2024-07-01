// src/controllers/UserController.js
import { UserModel } from '../Model/UserModel.js';
import ApiService from '../services/ApiService';

class UserController {
  async fetchUsers() {
    const response = await ApiService.get('/activeCurrent');
    let valores = new UserModel(response)
    return valores;
  }
}

export default UserController;
