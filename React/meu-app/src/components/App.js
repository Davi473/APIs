// src/components/App.js
import React, { useEffect, useState } from 'react';
import UserController from '../Controllers/UserController';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const users = await UserController.fetchUsers();
      setUsers(users);
    }
    fetchData();
  }, []);

  return (
    <div></div>
  );
}

export default App;
