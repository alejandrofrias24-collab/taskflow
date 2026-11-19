import {
 useAuth
}
from "../hooks/useAuth";

export default function Profile() {

 const { user } =
 useAuth();

 return (

  <div>

   <h1>
    Mi Perfil
   </h1>

   <h3>
    {user?.email}
   </h3>

  </div>

 );

}