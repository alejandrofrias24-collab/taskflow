import {
 useAuth
}
from "./useAuth";

export const
usePermissions =
() => {

 const {
  user
 } = useAuth();

 const isAdmin =
 user?.rol ===
 "Administrador";

 const isSupervisor =
 user?.rol ===
 "Supervisor";

 return {

  isAdmin,

  isSupervisor,

  canCreateProject:
   isAdmin ||
   isSupervisor,

  canDeleteProject:
   isAdmin

 };

};