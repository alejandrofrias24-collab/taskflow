import {
 Navigate
}
from "react-router-dom";

import {
 useAuth
}
from "../hooks/useAuth";

export default function PrivateRoute({
 children
}) {

 const {
  user,
  loading
 } = useAuth();

 if(loading)
  return <h2>Cargando...</h2>;

 return user
 ? children
 : <Navigate to="/login" />;
}