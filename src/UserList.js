import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Utilisation d'Axios pour obtenir les données depuis l'API jsonplaceholder
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      });
    }, []);
  
    return (
      <div>
        <h1>Liste des Utilisateurs</h1>
        <ul>
          {listOfUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default UserList;