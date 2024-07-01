// src/components/App.js
import React, { useEffect, useState } from 'react';
import UserController from '../Controllers/UserController';
import Header from './Header';
import Footer from './Footer';

async function App() {
  
    let valores = new UserController().fetchUsers();
    console.log(valores)
    return (
      <div>
        <div>{await valores.id}</div>
        <div>{await valores.name}</div>
        <div>{await valores.email}</div>
      </div>
    )

}

export default App;
