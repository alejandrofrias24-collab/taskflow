import {
 useEffect,
 useState
}
from "react";

import api
from "../services/api";

import MainLayout
from "../components/layout/MainLayout";

export default function Users(){

 const [users,
 setUsers] =
 useState([]);

 useEffect(() => {

  loadUsers();

 }, []);

 const loadUsers =
 async () => {

  const response =
  await api.get(
   "/users"
  );

  setUsers(
   response.data
  );

 };

 return(

  <MainLayout>

   <h1>
    Usuarios
   </h1>

   <table>

    <thead>
      <tr>
       <th>ID</th>
       <th>Nombre</th>
       <th>Email</th>
       <th>Rol</th>
      </tr>
    </thead>

    <tbody>

      {
       users.map(user => (

        <tr key={user.id}>
         <td>{user.id}</td>
         <td>{user.nombre}</td>
         <td>{user.email}</td>
         <td>{user.rol}</td>
        </tr>

       ))
      }

    </tbody>

   </table>

  </MainLayout>

 );

}