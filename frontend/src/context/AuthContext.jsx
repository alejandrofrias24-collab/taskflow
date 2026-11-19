import {
 createContext,
 useEffect,
 useState
}
from "react";

import {
 profile
}
from "../services/authService";

export const AuthContext =
createContext();

export const AuthProvider =
({ children }) => {

 const [user,setUser] =
 useState(null);

 const [loading,
 setLoading] =
 useState(true);

 useEffect(() => {

   loadUser();

 }, []);

 const loadUser =
 async () => {

  try {

    const data =
    await profile();

    setUser({
 ...data.usuario,
 rol:data.usuario.rol
});

  } catch {

    setUser(null);

  } finally {

    setLoading(false);

  }

 };

 const logout = () => {

  localStorage.removeItem(
    "token"
  );

  setUser(null);

 };

 return (

  <AuthContext.Provider
   value={{
    user,
    setUser,
    logout,
    loading
   }}
  >
   {children}
  </AuthContext.Provider>

 );

};